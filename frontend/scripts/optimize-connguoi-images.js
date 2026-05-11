/**
 * optimize-connguoi-images.js
 * Nén tại chỗ toàn bộ ảnh dùng trong phần Mô Hình Tổ Chức
 *
 * Chiến lược:
 *  - Giữ nguyên tên file + đuôi mở rộng (không cần cập nhật code)
 *  - JPEG/JPG: nén quality 82, resize max theo loại ảnh
 *  - PNG (ảnh chụp): nén quality 82 → giữ PNG
 *  - PNG (bản đồ/icon): quality 80, không resize
 *  - Nếu vẫn > 1MB: giảm dần quality xuống 50
 *  - Backup originals vào _originals/
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC = path.join(__dirname, '..', 'public', 'images');
const MAX_SIZE = 1 * 1024 * 1024; // 1 MB

// Cấu hình từng thư mục: { maxWidth, quality, isMapIcon }
const DIR_CONFIG = {
  'hethongsieuthi':    { maxWidth: 1200, quality: 82 },
  'tapthephong':       { maxWidth: 1200, quality: 82 },
  'anh_nhan_su':       { maxWidth: 800,  quality: 82 },
  'anh_cong_doan':     { maxWidth: 1200, quality: 82 },
  'vinhdanh':          { maxWidth: 900,  quality: 82 },
  'lien_chi_doan':     { maxWidth: 1200, quality: 82 },
  'chi_hoi_phu_nu':    { maxWidth: 1200, quality: 82 },
  'dangbophanvachibo': { maxWidth: 1200, quality: 82 },
  'ban_giam_doc':      { maxWidth: 900,  quality: 82 },
  'giamdoc':           { maxWidth: 900,  quality: 82 },
  'provinces':         { maxWidth: 600,  quality: 80 }, // bản đồ thumbnail
  'staff':             { maxWidth: 1200, quality: 82 },
  'backgrounds':       { maxWidth: 1920, quality: 82 },
  'regions':           { maxWidth: 800,  quality: 82 },
};

async function compressFile(filePath, config) {
  const ext = path.extname(filePath).toLowerCase();
  const dir = path.dirname(filePath);
  const filename = path.basename(filePath);
  const tempPath = filePath + '.tmp';

  // Skip nếu là file tạm, backup
  if (filename.endsWith('.tmp') || filename.endsWith('.bak')) return null;
  if (!fs.existsSync(filePath)) return null;

  const origSize = fs.statSync(filePath).size;
  if (origSize <= MAX_SIZE) {
    return { skipped: true, path: filePath, origSize };
  }

  // Backup
  const backupDir = path.join(dir, '_originals');
  if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });
  const backupPath = path.join(backupDir, filename);
  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(filePath, backupPath);
  }

  let { maxWidth, quality } = config;

  const tryCompress = async (q) => {
    let pipeline = sharp(filePath);
    const meta = await pipeline.metadata();
    
    if (meta.width && meta.width > maxWidth) {
      pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
    }

    if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({ quality: q, mozjpeg: true });
    } else if (ext === '.png') {
      pipeline = pipeline.png({ quality: q, compressionLevel: 9 });
    } else if (ext === '.webp') {
      pipeline = pipeline.webp({ quality: q });
    } else {
      return null; // Skip SVG, GIF, etc.
    }

    await pipeline.toFile(tempPath);
    return fs.statSync(tempPath).size;
  };

  try {
    let finalSize = await tryCompress(quality);
    if (finalSize === null) return null;

    // Giảm quality nếu vẫn > 1MB
    let q = quality - 10;
    while (finalSize > MAX_SIZE && q >= 50) {
      finalSize = await tryCompress(q);
      q -= 10;
    }

    // Chỉ thay thế nếu nhỏ hơn file gốc
    if (finalSize < origSize) {
      fs.renameSync(tempPath, filePath);
    } else {
      fs.unlinkSync(tempPath);
      return { skipped: true, path: filePath, origSize, reason: 'not smaller' };
    }

    return {
      path: filePath,
      origSize,
      finalSize,
      saved: origSize - finalSize,
      ok: finalSize <= MAX_SIZE
    };
  } catch (e) {
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    return { error: e.message, path: filePath };
  }
}

function getAllImageFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== '_originals') {
        results.push(...getAllImageFiles(full));
      }
    } else if (/\.(jpg|jpeg|png|webp)$/i.test(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

async function main() {
  console.log('🚀 Bắt đầu tối ưu toàn bộ ảnh Mô Hình Tổ Chức...\n');
  const startTime = Date.now();

  let totalFiles = 0;
  let optimized = 0;
  let skipped = 0;
  let errors = 0;
  let totalSaved = 0;
  const stillOver1MB = [];

  for (const [dirName, config] of Object.entries(DIR_CONFIG)) {
    const dirPath = path.join(PUBLIC, dirName);
    if (!fs.existsSync(dirPath)) {
      console.log(`⏭️  ${dirName}/ — không tìm thấy thư mục`);
      continue;
    }

    const files = getAllImageFiles(dirPath);
    const over1MB = files.filter(f => fs.statSync(f).size > MAX_SIZE);

    if (over1MB.length === 0) {
      const total = files.length;
      console.log(`✅ ${dirName}/ — ${total} file, tất cả đều dưới 1MB`);
      skipped += total;
      totalFiles += total;
      continue;
    }

    console.log(`\n📂 ${dirName}/ — ${files.length} file, ${over1MB.length} cần nén`);

    for (const file of files) {
      totalFiles++;
      const result = await compressFile(file, config);
      if (!result) continue;

      if (result.error) {
        errors++;
        console.log(`  ⚠️  ERROR: ${path.basename(result.path)} — ${result.error}`);
      } else if (result.skipped) {
        skipped++;
      } else {
        const origKB = Math.round(result.origSize / 1024);
        const finalKB = Math.round(result.finalSize / 1024);
        const pct = (((result.origSize - result.finalSize) / result.origSize) * 100).toFixed(1);
        const status = result.ok ? '✅' : '⚠️ ';
        optimized++;
        totalSaved += result.saved;
        console.log(`  ${status} ${path.basename(result.path)}  ${origKB}KB → ${finalKB}KB  (-${pct}%)`);
        if (!result.ok) stillOver1MB.push(result.path);
      }
    }
  }

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);

  console.log('\n================================================');
  console.log('✨ HOÀN TẤT!');
  console.log(`Thời gian: ${elapsed}s`);
  console.log(`Tổng file: ${totalFiles}`);
  console.log(`Đã nén: ${optimized}`);
  console.log(`Bỏ qua (đã OK): ${skipped}`);
  console.log(`Lỗi: ${errors}`);
  console.log(`💾 Tổng tiết kiệm: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);

  if (stillOver1MB.length > 0) {
    console.log(`\n⚠️  ${stillOver1MB.length} file vẫn > 1MB (cần xem xét thủ công):`);
    stillOver1MB.forEach(f => {
      const kb = Math.round(fs.statSync(f).size / 1024);
      console.log(`  - ${f.replace(PUBLIC, '')} [${kb}KB]`);
    });
  } else {
    console.log('\n🎉 Tất cả ảnh đều dưới 1MB!');
  }
}

main().catch(console.error);
