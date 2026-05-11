/**
 * optimize-tuonglai-images-v2.js
 * Xử lý lỗi EPERM khi xóa file — thử rename thay vì unlink
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC = path.join(__dirname, '..', 'public');
const TUONG_LAI = path.join(PUBLIC, 'images', 'tuong-lai');
const MAX_SIZE = 1 * 1024 * 1024; // 1MB

async function optimize(inputPath, opts) {
  const { quality, maxWidth, format } = opts;
  const dir = path.dirname(inputPath);
  const ext = path.extname(inputPath).toLowerCase();
  const base = path.basename(inputPath, path.extname(inputPath));
  const outExt = format === 'webp' ? '.webp' : ext;
  const outputPath = path.join(dir, base + outExt);
  const tempPath = outputPath + '.tmp';

  // Backup
  const backupDir = path.join(dir, '_originals');
  if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });
  const backupPath = path.join(backupDir, path.basename(inputPath));
  if (!fs.existsSync(backupPath)) fs.copyFileSync(inputPath, backupPath);

  const origSize = fs.statSync(inputPath).size;

  let pipeline = sharp(inputPath);
  const meta = await pipeline.metadata();

  if (meta.width && meta.width > maxWidth) {
    pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
  }

  if (format === 'webp') pipeline = pipeline.webp({ quality });
  else pipeline = pipeline.jpeg({ quality, mozjpeg: true });

  await pipeline.toFile(tempPath);
  let finalSize = fs.statSync(tempPath).size;

  // Giảm chất lượng nếu vẫn > 1MB
  if (finalSize > MAX_SIZE) {
    let q = quality - 10;
    while (q >= 50 && finalSize > MAX_SIZE) {
      let p2 = sharp(inputPath);
      if (meta.width && meta.width > maxWidth) p2 = p2.resize({ width: maxWidth, withoutEnlargement: true });
      if (format === 'webp') p2 = p2.webp({ quality: q });
      else p2 = p2.jpeg({ quality: q, mozjpeg: true });
      await p2.toFile(tempPath);
      finalSize = fs.statSync(tempPath).size;
      q -= 10;
    }
  }

  fs.renameSync(tempPath, outputPath);

  // Nếu extension thay đổi, cố xóa file gốc, nếu lỗi thì overwrite bằng file rỗng
  if (outExt !== ext && fs.existsSync(inputPath)) {
    try {
      fs.unlinkSync(inputPath);
    } catch {
      // EPERM workaround: ghi đè file gốc bằng nội dung trống để vô hiệu hóa
      try {
        fs.writeFileSync(inputPath, '');
        console.log(`    ⚠️  Không xóa được file gốc, đã ghi trống: ${path.basename(inputPath)}`);
      } catch {
        console.log(`    ⚠️  Không thể xóa/trống file gốc: ${path.basename(inputPath)}`);
      }
    }
  }

  const savedPct = (((origSize - finalSize) / origSize) * 100).toFixed(1);
  const status = finalSize <= MAX_SIZE ? '✅' : '⚠️ ';
  console.log(
    `  ${status} ${path.basename(inputPath)} → ${base + outExt}  ` +
    `${Math.round(origSize / 1024)}KB → ${Math.round(finalSize / 1024)}KB  (-${savedPct}%)`
  );

  return { inputName: path.basename(inputPath), outputName: base + outExt };
}

async function main() {
  console.log('🚀 Tối ưu ảnh Vững Bước Tương Lai (v2)...\n');
  const start = Date.now();
  const renames = [];

  // ── 1. Slideshow images ──────────────────────────────────────────────────────
  const slideshowDir = path.join(TUONG_LAI, 'slideshow');
  console.log('📂 slideshow/');
  const slideshowFiles = fs.readdirSync(slideshowDir)
    .filter(f => /\.(png|jpg|jpeg)$/i.test(f) && !f.startsWith('.') && !f.endsWith('.tmp'));
  for (const f of slideshowFiles) {
    const fp = path.join(slideshowDir, f);
    // Bỏ qua nếu đã là webp hoặc file rỗng (đã xử lý)
    const stat = fs.statSync(fp);
    if (stat.size === 0) { console.log(`  ⏭️  ${f} — đã xử lý trước`); continue; }
    const result = await optimize(fp, { format: 'webp', quality: 82, maxWidth: 1920 });
    renames.push({ dir: 'slideshow', ...result });
  }

  // ── 2. Circle images ─────────────────────────────────────────────────────────
  console.log('\n📂 tuong-lai/ (vòng tròn)');
  for (const f of ['Trái.jpg', 'Giữa.jpg', 'Phải.jpg']) {
    const fp = path.join(TUONG_LAI, f);
    if (fs.existsSync(fp) && fs.statSync(fp).size > 0) {
      const result = await optimize(fp, { format: 'webp', quality: 85, maxWidth: 600 });
      renames.push({ dir: 'root', ...result });
    }
  }

  // ── 3. Background / header images ────────────────────────────────────────────
  console.log('\n📂 tuong-lai/ (backgrounds)');
  for (const f of ['header-ve-chung-toi.jpg', 'TuongLaiHead.png']) {
    const fp = path.join(TUONG_LAI, f);
    if (fs.existsSync(fp) && fs.statSync(fp).size > 0) {
      const result = await optimize(fp, { format: 'webp', quality: 82, maxWidth: 1920 });
      renames.push({ dir: 'root', ...result });
    }
  }

  const elapsed = ((Date.now() - start) / 1000).toFixed(1);
  console.log(`\n✨ Hoàn tất! (${elapsed}s)\n`);
  console.log('📋 Cần cập nhật trong code:');
  renames.forEach(r => {
    if (r.inputName !== r.outputName) {
      console.log(`  "${r.inputName}" → "${r.outputName}"`);
    }
  });
}

main().catch(console.error);
