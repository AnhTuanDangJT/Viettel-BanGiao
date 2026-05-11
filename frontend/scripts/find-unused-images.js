/**
 * find-unused-images.js
 * Quét toàn bộ public/images, xác định file nào không được dùng trong src/
 */
const fs = require('fs');
const path = require('path');

function getAllImages(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== '_originals') getAllImages(full, results);
    } else if (/\.(png|jpg|jpeg|webp|gif|svg|JPG|PNG|JPEG|WEBP)$/i.test(entry.name) && !entry.name.endsWith('.bak')) {
      results.push(full);
    }
  }
  return results;
}

function getAllSrcFiles(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) getAllSrcFiles(full, results);
    else if (/\.(tsx|ts|js|jsx|css|json|html|md)$/i.test(entry.name)) results.push(full);
  }
  return results;
}

const srcFiles = getAllSrcFiles('src');
for (const f of ['next.config.js','next.config.ts','next.config.mjs']) {
  if (fs.existsSync(f)) srcFiles.push(f);
}

const allCode = srcFiles.map(f => {
  try { return fs.readFileSync(f, 'utf8'); } catch { return ''; }
}).join('\n').toLowerCase();

const allImages = getAllImages('public/images');
console.log(`Tổng số ảnh: ${allImages.length}\n`);

const unused = [];
const used = [];

for (const imgPath of allImages) {
  const filename = path.basename(imgPath).toLowerCase();
  const filenameNoExt = path.basename(imgPath, path.extname(imgPath)).toLowerCase();
  
  const found = allCode.includes(filename) ||
                (filenameNoExt.length > 5 && allCode.includes(filenameNoExt));

  if (found) {
    used.push(imgPath);
  } else {
    unused.push(imgPath);
    const kb = Math.round(fs.statSync(imgPath).size / 1024);
    console.log(`❌ [${kb}KB]  ${imgPath.replace('public\\images\\', '').replace('public/images/', '')}`);
  }
}

console.log('\n=== TỔNG KẾT ===');
console.log(`✅ Đang dùng: ${used.length} files`);
console.log(`❌ Không dùng: ${unused.length} files`);
const totalSize = unused.reduce((sum, f) => sum + fs.statSync(f).size, 0);
console.log(`💾 Tổng có thể xóa: ${(totalSize/1024/1024).toFixed(2)} MB`);

// Ghi danh sách ra file để dùng cho bước xóa
fs.writeFileSync('scripts/_unused_images.json', JSON.stringify(unused, null, 2));
console.log('\n📝 Đã ghi danh sách vào scripts/_unused_images.json');
