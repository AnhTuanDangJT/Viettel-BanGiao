/**
 * optimize-map-images.js
 * Tối ưu toàn bộ ảnh phần bản đồ Việt Nam (Câu chuyện Viettel Store)
 * - Ảnh chân dung trong story-map/: nén JPEG quality 82, resize max 1000px
 * - Background diahinh2.1.png: convert sang WebP, quality 80, resize max 2000px
 * Tất cả ảnh > 300KB sẽ được xử lý
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC = path.join(__dirname, '..', 'public');
const STORY_MAP_DIR = path.join(PUBLIC, 'images', 'story-map');
const MAX_SIZE = 1 * 1024 * 1024; // 1MB hard limit
const PROCESS_THRESHOLD = 300 * 1024; // Xử lý file > 300KB

async function compressImage(inputPath, outputPath, opts) {
  const { format, quality, maxWidth } = opts;
  
  let pipeline = sharp(inputPath);
  const meta = await pipeline.metadata();
  
  if (meta.width && meta.width > maxWidth) {
    pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
  }
  
  if (format === 'webp') {
    pipeline = pipeline.webp({ quality });
  } else if (format === 'jpeg') {
    pipeline = pipeline.jpeg({ quality, mozjpeg: true });
  } else if (format === 'png') {
    pipeline = pipeline.png({ compressionLevel: 9, quality });
  }
  
  await pipeline.toFile(outputPath);
  let size = fs.statSync(outputPath).size;
  
  // Nếu vẫn > 1MB, giảm chất lượng tiếp
  if (size > MAX_SIZE) {
    let q = quality - 10;
    while (q >= 50 && size > MAX_SIZE) {
      let p2 = sharp(inputPath);
      if (meta.width && meta.width > maxWidth) {
        p2 = p2.resize({ width: maxWidth, withoutEnlargement: true });
      }
      if (format === 'webp') p2 = p2.webp({ quality: q });
      else if (format === 'jpeg') p2 = p2.jpeg({ quality: q, mozjpeg: true });
      else p2 = p2.png({ compressionLevel: 9, quality: q });
      await p2.toFile(outputPath);
      size = fs.statSync(outputPath).size;
      q -= 10;
    }
  }
  
  return size;
}

async function processFile(inputPath, opts, backupDir) {
  const origSize = fs.statSync(inputPath).size;
  const dir = path.dirname(inputPath);
  const ext = path.extname(inputPath).toLowerCase();
  const base = path.basename(inputPath, ext);
  
  // Xác định format output
  let outExt = ext;
  let format = opts.format;
  if (format === 'webp') outExt = '.webp';
  else if (format === 'jpeg') outExt = '.jpg';
  
  const outputPath = path.join(dir, base + outExt);
  const tempPath = outputPath + '.tmp_opt';
  
  // Backup
  if (backupDir) {
    if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });
    const backupPath = path.join(backupDir, path.basename(inputPath));
    if (!fs.existsSync(backupPath)) fs.copyFileSync(inputPath, backupPath);
  }
  
  try {
    const finalSize = await compressImage(inputPath, tempPath, opts);
    const savedPct = (((origSize - finalSize) / origSize) * 100).toFixed(1);
    const status = finalSize <= MAX_SIZE ? '✅' : '⚠️ ';
    
    // Nếu output cùng tên → ghi đè
    if (outputPath === inputPath) {
      fs.renameSync(tempPath, inputPath);
    } else {
      fs.renameSync(tempPath, outputPath);
      // Xóa file gốc nếu đổi extension
      if (outExt !== ext && fs.existsSync(inputPath)) {
        fs.unlinkSync(inputPath);
      }
    }
    
    console.log(`  ${status} ${path.basename(inputPath)} → ${base + outExt}  ${Math.round(origSize/1024)}KB → ${Math.round(finalSize/1024)}KB  (-${savedPct}%)`);
    return { saved: origSize - finalSize, finalSize };
  } catch (err) {
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    console.error(`  ❌ ${path.basename(inputPath)}: ${err.message}`);
    return { saved: 0, finalSize: origSize };
  }
}

async function main() {
  console.log('🗺️  Tối ưu ảnh phần Bản đồ Việt Nam...\n');
  const startTime = Date.now();
  let totalSaved = 0;
  let totalFiles = 0;
  
  // ─── 1. Background diahinh2.1.png ───────────────────────────────────────────
  const bgFile = path.join(PUBLIC, 'images', 'diahinh2.1.png');
  if (fs.existsSync(bgFile)) {
    console.log('📌 Background bản đồ:');
    const backupDir = path.join(PUBLIC, 'images', '_originals');
    const result = await processFile(bgFile, { format: 'webp', quality: 80, maxWidth: 2000 }, backupDir);
    totalSaved += result.saved;
    totalFiles++;
  }
  
  // ─── 2. Ảnh chân dung trong story-map/ ─────────────────────────────────────
  console.log('\n📂 story-map — chân dung nhân sự:');
  
  const allFiles = [];
  function walkDir(dir) {
    const entries = fs.readdirSync(dir);
    for (const entry of entries) {
      const fullPath = path.join(dir, entry);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && entry !== '_originals') {
        walkDir(fullPath);
      } else if (stat.isFile() && /\.(jpg|jpeg|png)$/i.test(entry)) {
        allFiles.push({ path: fullPath, size: stat.size });
      }
    }
  }
  walkDir(STORY_MAP_DIR);
  
  // Chỉ xử lý file > 300KB
  const toProcess = allFiles.filter(f => f.size > PROCESS_THRESHOLD);
  const skipCount = allFiles.length - toProcess.length;
  
  console.log(`  Tổng: ${allFiles.length} files | Xử lý: ${toProcess.length} files (> 300KB) | Bỏ qua: ${skipCount} files`);
  
  for (const file of toProcess) {
    const dir = path.dirname(file.path);
    const backupDir = path.join(dir, '_originals');
    const ext = path.extname(file.path).toLowerCase();
    
    let opts;
    if (ext === '.png') {
      // PNG portraits → giữ nguyên PNG nhưng nén, hoặc convert JPEG nếu không có transparency
      opts = { format: 'jpeg', quality: 85, maxWidth: 1000 };
    } else {
      opts = { format: 'jpeg', quality: 82, maxWidth: 1000 };
    }
    
    const result = await processFile(file.path, opts, backupDir);
    totalSaved += result.saved;
    totalFiles++;
  }
  
  console.log(`\n  ⏭️  Bỏ qua ${skipCount} files ≤ 300KB (đã đủ nhỏ)`);
  
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\n✨ Xong! Đã tối ưu ${totalFiles} files trong ${elapsed}s`);
  console.log(`💾 Tiết kiệm tổng: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
}

main().catch(console.error);
