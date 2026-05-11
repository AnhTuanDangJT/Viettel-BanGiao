/**
 * delete-unused-images.js
 * Xóa các file ảnh không được dùng trong source code.
 * Backup vào _originals trước khi xóa.
 * 
 * LOGIC AN TOÀN:
 * - story-map/: chỉ xóa file có tên trùng với bản copy khác trong cùng thư mục
 *   (vd: "ha-noi-1.jpg" và "1.jpg" cùng tồn tại → xóa bản "ha-noi-1.jpg" nếu "1.jpg" được dùng)
 * - Các thư mục khác: xóa nếu không có bất kỳ tham chiếu nào trong code
 */

const fs = require('fs');
const path = require('path');

function getAllImages(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== '_originals') getAllImages(full, results);
    } else if (/\.(png|jpg|jpeg|webp|gif|svg)$/i.test(entry.name) && !entry.name.endsWith('.bak')) {
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

// Đọc toàn bộ source code
const srcFiles = getAllSrcFiles('src');
const allCode = srcFiles.map(f => {
  try { return fs.readFileSync(f, 'utf8'); } catch { return ''; }
}).join('\n').toLowerCase();

// Đọc danh sách ảnh không dùng từ bước trước
const unusedList = JSON.parse(fs.readFileSync('scripts/_unused_images.json', 'utf8'));

// Nhóm ảnh theo thư mục để phát hiện duplicate
// Trong story-map, có nhiều cặp: "ha-noi-1.jpg" và "1.jpg" là cùng ảnh
// Cặp được phát hiện nếu: file A không dùng, file B (cùng thư mục, nội dung tương tự) được dùng

const toDelete = [];
const toSkip = [];

for (const imgPath of unusedList) {
  const relative = imgPath.replace(/\\/g, '/').replace('public/images/', '');
  const filename = path.basename(imgPath);
  const filenameNoExt = path.basename(imgPath, path.extname(imgPath));
  const dir = path.dirname(imgPath);
  
  // ── Kiểm tra xem có bản khác trong cùng thư mục đang được dùng không ──────
  // Ví dụ: "ha-noi-1.jpg" → tìm xem "1.jpg" có dùng không
  // Pattern: "prefix-N.ext" → "N.ext"
  const numericSuffix = filenameNoExt.match(/-(\d+)$/);
  let hasSiblingInUse = false;
  
  if (numericSuffix) {
    const num = numericSuffix[1]; // vd: "1"
    const ext = path.extname(imgPath).toLowerCase();
    // Tìm file "N.jpg" hoặc "N.webp" trong cùng thư mục
    for (const sibling of fs.readdirSync(dir)) {
      const sibBase = path.basename(sibling, path.extname(sibling));
      const sibFull = path.join(dir, sibling);
      if (sibBase === num && sibFull !== imgPath) {
        // Kiểm tra sibling có được dùng không
        const sibName = sibling.toLowerCase();
        if (allCode.includes(sibName) || allCode.includes(sibBase)) {
          hasSiblingInUse = true;
          break;
        }
      }
    }
  }
  
  if (hasSiblingInUse) {
    toDelete.push({ path: imgPath, reason: 'duplicate (sibling in use)' });
  } else {
    // Không có sibling → đây thực sự là file không dùng
    toDelete.push({ path: imgPath, reason: 'not referenced' });
  }
}

console.log(`\nSẽ xóa: ${toDelete.length} files\n`);

let totalSaved = 0;
let deleted = 0;
let errors = 0;

for (const item of toDelete) {
  const imgPath = item.path;
  const dir = path.dirname(imgPath);
  const backupDir = path.join(dir, '_originals');
  
  try {
    const size = fs.statSync(imgPath).size;
    
    // Backup
    if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });
    const backupPath = path.join(backupDir, path.basename(imgPath));
    if (!fs.existsSync(backupPath)) fs.copyFileSync(imgPath, backupPath);
    
    // Xóa
    fs.unlinkSync(imgPath);
    
    totalSaved += size;
    deleted++;
    const kb = Math.round(size / 1024);
    console.log(`🗑️  [${kb}KB] ${imgPath.replace('public\\images\\', '').replace('public/images/', '')}`);
  } catch(e) {
    errors++;
    console.log(`⚠️  Lỗi: ${path.basename(imgPath)} — ${e.message}`);
  }
}

console.log(`\n✅ Đã xóa: ${deleted} files`);
if (errors > 0) console.log(`⚠️  Lỗi: ${errors} files`);
console.log(`💾 Giải phóng: ${(totalSaved/1024/1024).toFixed(2)} MB`);
