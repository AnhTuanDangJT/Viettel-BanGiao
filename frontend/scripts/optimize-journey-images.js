/**
 * optimize-journey-images.js
 * Tối ưu toàn bộ ảnh phần Hành Trình Tự Hào xuống dưới 1MB
 * Chiến lược:
 *  - cup-*.png (trophy): convert sang WebP, quality 82, resize max 1200px
 *  - milestones/*.jpeg/jpg: compress JPEG quality 82, resize max 1200px  
 *  - background images (diahinh*.png): convert sang WebP, quality 80
 * Files gốc được backup vào thư mục _originals/
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC = path.join(__dirname, '..', 'public');

// Danh sách các task cần xử lý
const tasks = [
  // 1. Trophy images trong /images/trophies/ (cup-1 đến cup-22 + exact-*)
  {
    dir: path.join(PUBLIC, 'images', 'trophies'),
    pattern: /^(cup-\d+|exact-cup-\d+)\.png$/i,
    outputExt: '.webp',
    options: { format: 'webp', quality: 82, maxWidth: 1200 },
  },
  // 2. Trophy images trong /assets/journey/ (cup-1 đến cup-22)
  {
    dir: path.join(PUBLIC, 'assets', 'journey'),
    pattern: /^cup-\d+\.png$/i,
    outputExt: '.webp',
    options: { format: 'webp', quality: 82, maxWidth: 1200 },
  },
  // 3. Milestones trong /images/journey/milestones/
  {
    dir: path.join(PUBLIC, 'images', 'journey', 'milestones'),
    pattern: /\.(jpg|jpeg|png)$/i,
    outputExt: null, // giữ nguyên extension nhưng compress
    options: { format: 'jpeg', quality: 82, maxWidth: 1200 },
  },
  // 4. Background images (diahinh*.png) trong /images/
  {
    dir: path.join(PUBLIC, 'images'),
    pattern: /^(diahinh1\.1|exact-diahinh2\.2)\.png$/i,
    outputExt: '.webp',
    options: { format: 'webp', quality: 80, maxWidth: 2000 },
    filesOnly: true, // chỉ xử lý files ở root, không đệ quy
  },
];

const MAX_SIZE = 1 * 1024 * 1024; // 1MB

async function processImage(inputPath, outputPath, options) {
  let pipeline = sharp(inputPath);
  const meta = await pipeline.metadata();

  // Resize nếu quá lớn
  if (meta.width && meta.width > options.maxWidth) {
    pipeline = pipeline.resize({ width: options.maxWidth, withoutEnlargement: true });
  }

  if (options.format === 'webp') {
    pipeline = pipeline.webp({ quality: options.quality });
  } else if (options.format === 'jpeg') {
    pipeline = pipeline.jpeg({ quality: options.quality, mozjpeg: true });
  }

  await pipeline.toFile(outputPath);

  const finalSize = fs.statSync(outputPath).size;

  // Nếu vẫn > 1MB, giảm thêm chất lượng
  if (finalSize > MAX_SIZE) {
    let q = options.quality - 10;
    while (q >= 50) {
      let p2 = sharp(inputPath);
      if (meta.width && meta.width > options.maxWidth) {
        p2 = p2.resize({ width: options.maxWidth, withoutEnlargement: true });
      }
      if (options.format === 'webp') {
        p2 = p2.webp({ quality: q });
      } else {
        p2 = p2.jpeg({ quality: q, mozjpeg: true });
      }
      await p2.toFile(outputPath);
      const newSize = fs.statSync(outputPath).size;
      if (newSize <= MAX_SIZE) break;
      q -= 10;
    }
  }

  return fs.statSync(outputPath).size;
}

async function runTask(task) {
  const { dir, pattern, outputExt, options } = task;
  if (!fs.existsSync(dir)) {
    console.log(`[SKIP] Thư mục không tồn tại: ${dir}`);
    return;
  }

  const allFiles = fs.readdirSync(dir);
  const files = allFiles.filter(f => {
    if (task.filesOnly && fs.statSync(path.join(dir, f)).isDirectory()) return false;
    return pattern.test(f);
  });

  console.log(`\n📂 ${path.relative(PUBLIC, dir)} — ${files.length} files`);

  // Tạo thư mục backup
  const backupDir = path.join(dir, '_originals');
  if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });

  for (const file of files) {
    const inputPath = path.join(dir, file);
    const origSize = fs.statSync(inputPath).size;

    // Xác định tên file output
    const ext = path.extname(file);
    const base = path.basename(file, ext);
    const newExt = outputExt || ext;
    const outputName = base + newExt;
    const outputPath = path.join(dir, outputName);
    const tempPath = outputPath + '.tmp';

    // Backup file gốc nếu chưa có
    const backupPath = path.join(backupDir, file);
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(inputPath, backupPath);
    }

    try {
      const finalSize = await processImage(inputPath, tempPath, options);
      const saved = origSize - finalSize;
      const savedPct = ((saved / origSize) * 100).toFixed(1);
      const status = finalSize <= MAX_SIZE ? '✅' : '⚠️ ';

      // Ghi đè file gốc nếu output khác tên; nếu cùng tên thì rename temp -> output
      if (outputPath === inputPath) {
        fs.renameSync(tempPath, inputPath);
      } else {
        // Nếu output là file mới (e.g. .webp thay .png), xóa file gốc sau khi backup
        fs.renameSync(tempPath, outputPath);
        if (ext !== newExt) {
          // Xóa file .png gốc (đã backup)
          fs.unlinkSync(inputPath);
        }
      }

      console.log(
        `  ${status} ${file} → ${outputName}  ` +
        `${(origSize / 1024).toFixed(0)}KB → ${(finalSize / 1024).toFixed(0)}KB  (-${savedPct}%)`
      );
    } catch (err) {
      // Dọn temp nếu lỗi
      if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
      console.error(`  ❌ Lỗi: ${file} — ${err.message}`);
    }
  }
}

async function main() {
  console.log('🚀 Bắt đầu tối ưu ảnh Hành Trình Tự Hào...\n');
  const start = Date.now();

  for (const task of tasks) {
    await runTask(task);
  }

  const elapsed = ((Date.now() - start) / 1000).toFixed(1);
  console.log(`\n✨ Hoàn tất! (${elapsed}s)\n`);
}

main().catch(console.error);
