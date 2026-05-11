/**
 * optimize-tuonglai-images.js
 * Tối ưu toàn bộ ảnh phần Vững Bước Tương Lai xuống dưới 1MB
 *
 * Chiến lược:
 *  - slideshow/*.png   → WebP, quality 82, max 1920px (full-screen bg)
 *  - Trái/Giữa/Phải.jpg → WebP, quality 82, max 600px (hiển thị nhỏ: 185-224px)
 *  - header-ve-chung-toi.jpg → WebP, quality 82, max 1920px (full-width bg)
 *  - TuongLaiHead.png  → WebP, quality 82, max 1920px
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
  const ext = path.extname(inputPath);
  const base = path.basename(inputPath, ext);
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

  // Nếu vẫn > 1MB, giảm quality
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

  // Nếu ext thay đổi → xóa file gốc sau khi rename
  fs.renameSync(tempPath, outputPath);
  if (outExt !== ext.toLowerCase() && fs.existsSync(inputPath)) {
    fs.unlinkSync(inputPath);
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
  console.log('🚀 Tối ưu ảnh Vững Bước Tương Lai...\n');
  const start = Date.now();
  const renames = []; // { inputName, outputName }

  // ── 1. Slideshow images ──────────────────────────────────────────────────────
  const slideshowDir = path.join(TUONG_LAI, 'slideshow');
  console.log('📂 slideshow/');
  const slideshowFiles = fs.readdirSync(slideshowDir).filter(f => /\.(png|jpg|jpeg)$/i.test(f) && !f.startsWith('.'));
  for (const f of slideshowFiles) {
    const result = await optimize(path.join(slideshowDir, f), {
      format: 'webp', quality: 82, maxWidth: 1920
    });
    renames.push({ dir: 'slideshow', ...result });
  }

  // ── 2. Circle images (Trái, Giữa, Phải) ─────────────────────────────────────
  console.log('\n📂 tuong-lai/ (circle images)');
  for (const f of ['Trái.jpg', 'Giữa.jpg', 'Phải.jpg']) {
    const fp = path.join(TUONG_LAI, f);
    if (fs.existsSync(fp)) {
      const result = await optimize(fp, { format: 'webp', quality: 85, maxWidth: 600 });
      renames.push({ dir: 'root', ...result });
    }
  }

  // ── 3. Header / background image ─────────────────────────────────────────────
  console.log('\n📂 tuong-lai/ (backgrounds)');
  for (const f of ['header-ve-chung-toi.jpg', 'TuongLaiHead.png']) {
    const fp = path.join(TUONG_LAI, f);
    if (fs.existsSync(fp)) {
      const result = await optimize(fp, { format: 'webp', quality: 82, maxWidth: 1920 });
      renames.push({ dir: 'root', ...result });
    }
  }

  const elapsed = ((Date.now() - start) / 1000).toFixed(1);
  console.log(`\n✨ Hoàn tất! (${elapsed}s)`);

  // Print rename map for code update
  console.log('\n📋 Danh sách đổi tên:');
  renames.forEach(r => console.log(`  ${r.inputName} → ${r.outputName}`));
}

main().catch(console.error);
