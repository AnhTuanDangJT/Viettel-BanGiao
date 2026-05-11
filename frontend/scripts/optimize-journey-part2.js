/**
 * optimize-journey-part2.js
 * Tối ưu phần còn lại: cup-4..9, exact-cups, milestones, backgrounds
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC = path.join(__dirname, '..', 'public');
const MAX_SIZE = 1 * 1024 * 1024; // 1MB

async function processImage(inputPath, outputPath, options) {
  let pipeline = sharp(inputPath);
  const meta = await pipeline.metadata();

  if (meta.width && meta.width > options.maxWidth) {
    pipeline = pipeline.resize({ width: options.maxWidth, withoutEnlargement: true });
  }

  if (options.format === 'webp') {
    pipeline = pipeline.webp({ quality: options.quality });
  } else if (options.format === 'jpeg') {
    pipeline = pipeline.jpeg({ quality: options.quality, mozjpeg: true });
  }

  await pipeline.toFile(outputPath);
  let finalSize = fs.statSync(outputPath).size;

  if (finalSize > MAX_SIZE) {
    let q = options.quality - 10;
    while (q >= 50) {
      let p2 = sharp(inputPath);
      if (meta.width && meta.width > options.maxWidth) {
        p2 = p2.resize({ width: options.maxWidth, withoutEnlargement: true });
      }
      if (options.format === 'webp') p2 = p2.webp({ quality: q });
      else p2 = p2.jpeg({ quality: q, mozjpeg: true });
      await p2.toFile(outputPath);
      finalSize = fs.statSync(outputPath).size;
      if (finalSize <= MAX_SIZE) break;
      q -= 10;
    }
  }
  return fs.statSync(outputPath).size;
}

async function processFile(inputPath, outputExt, options, backupDir) {
  const origSize = fs.statSync(inputPath).size;
  const dir = path.dirname(inputPath);
  const ext = path.extname(inputPath);
  const base = path.basename(inputPath, ext);
  const newExt = outputExt || ext;
  const outputPath = path.join(dir, base + newExt);
  const tempPath = outputPath + '.tmp';

  // Backup
  if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });
  const backupPath = path.join(backupDir, path.basename(inputPath));
  if (!fs.existsSync(backupPath)) fs.copyFileSync(inputPath, backupPath);

  try {
    const finalSize = await processImage(inputPath, tempPath, options);
    const savedPct = (((origSize - finalSize) / origSize) * 100).toFixed(1);
    const status = finalSize <= MAX_SIZE ? '✅' : '⚠️ ';

    if (outputPath === inputPath) {
      fs.renameSync(tempPath, inputPath);
    } else {
      fs.renameSync(tempPath, outputPath);
      if (ext !== newExt && fs.existsSync(inputPath)) fs.unlinkSync(inputPath);
    }

    console.log(`  ${status} ${path.basename(inputPath)} → ${base + newExt}  ${Math.round(origSize/1024)}KB → ${Math.round(finalSize/1024)}KB  (-${savedPct}%)`);
  } catch (err) {
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    console.error(`  ❌ ${path.basename(inputPath)}: ${err.message}`);
  }
}

async function main() {
  console.log('🚀 Phần 2: Tối ưu ảnh còn lại...\n');

  // 1. Remaining cup-4..9 + exact-cup-1..4 in images/trophies
  const trDir = path.join(PUBLIC, 'images', 'trophies');
  const trBackup = path.join(trDir, '_originals');
  const trFiles = fs.readdirSync(trDir).filter(f => /^(cup-[4-9]|exact-cup-\d+)\.png$/i.test(f));
  console.log(`📂 images/trophies — ${trFiles.length} files còn lại`);
  for (const f of trFiles) {
    await processFile(path.join(trDir, f), '.webp', { format: 'webp', quality: 82, maxWidth: 1200 }, trBackup);
  }

  // 2. Milestones
  const msDir = path.join(PUBLIC, 'images', 'journey', 'milestones');
  const msBackup = path.join(msDir, '_originals');
  const msFiles = fs.readdirSync(msDir).filter(f => /\.(jpg|jpeg|png)$/i.test(f) && fs.statSync(path.join(msDir, f)).isFile());
  console.log(`\n📂 images/journey/milestones — ${msFiles.length} files`);
  for (const f of msFiles) {
    const fp = path.join(msDir, f);
    const sz = fs.statSync(fp).size;
    // Chỉ xử lý nếu > 300KB
    if (sz > 300 * 1024) {
      await processFile(fp, null, { format: 'jpeg', quality: 82, maxWidth: 1200 }, msBackup);
    } else {
      console.log(`  ⏭️  ${f}  ${Math.round(sz/1024)}KB — bỏ qua (đủ nhỏ)`);
    }
  }

  // 3. Background images in /images/
  const imgDir = path.join(PUBLIC, 'images');
  const imgBackup = path.join(imgDir, '_originals');
  const bgFiles = ['diahinh1.1.png', 'exact-diahinh2.2.png'];
  console.log(`\n📂 images/ — ${bgFiles.length} background files`);
  for (const f of bgFiles) {
    const fp = path.join(imgDir, f);
    if (fs.existsSync(fp)) {
      await processFile(fp, '.webp', { format: 'webp', quality: 80, maxWidth: 2000 }, imgBackup);
    }
  }

  console.log('\n✨ Phần 2 hoàn tất!\n');
}

main().catch(console.error);
