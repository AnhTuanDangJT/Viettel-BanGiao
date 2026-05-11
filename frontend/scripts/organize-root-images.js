/**
 * organize-root-images.js
 * Di chuyển ảnh gốc trong /public/images/ vào thư mục con có tổ chức
 * Sau đó cập nhật toàn bộ đường dẫn trong src/
 */

const fs = require('fs');
const path = require('path');

const IMG_ROOT = 'public/images';

// Bản đồ: tên file gốc → thư mục đích
const MOVE_MAP = {
  // === backgrounds/ — ảnh địa hình nền ===
  'diahinh.png':            'backgrounds',
  'diahinh1.1.webp':        'backgrounds',
  'diahinh2.1.webp':        'backgrounds',
  'diahinh2.2.png':         'backgrounds',
  'diahinh3.png':           'backgrounds',
  'exact-diahinh2.2.webp':  'backgrounds',

  // === homepage/ — ảnh trang chủ + logo ===
  'anh-trang-chu.jpg':      'homepage',
  'logo-viettel-store.png': 'homepage',

  // === staff/ — ảnh nhân sự cá nhân & tập thể ===
  '1792293004306854965.jpg': 'staff',
  'Canhan5.JPG':             'staff',
  'caothihuong.jpg':         'staff',
  'dangthuytrang.jpg':       'staff',
  'hoangthingoc.jpg':        'staff',
  'maothihang.jpg':          'staff',
  'nguyenngocnhu.jpg':       'staff',
  'nguyenthikimngan.jpg':    'staff',
  'phamthinga.jpg':          'staff',
  'pham-thi-van-v2.png':     'staff',
  'tap_the_qlv.jpg':         'staff',
  'trinhthithu.jpg':         'staff',

  // === regions/ — overlay văn bản địa phương ===
  'danang_text3.png':   'regions',
  'danang_text4.png':   'regions',
  'khanhhoa_text3.png': 'regions',
  'khanhhoa_text4.png': 'regions',
};

// Tạo thư mục đích
const dirs = [...new Set(Object.values(MOVE_MAP))];
for (const d of dirs) {
  const dp = path.join(IMG_ROOT, d);
  if (!fs.existsSync(dp)) fs.mkdirSync(dp, { recursive: true });
}

// Di chuyển file + ghi lại map đổi đường dẫn
const pathUpdates = []; // { oldPath, newPath } (đường dẫn web)

for (const [filename, targetDir] of Object.entries(MOVE_MAP)) {
  const src = path.join(IMG_ROOT, filename);
  const dst = path.join(IMG_ROOT, targetDir, filename);

  if (!fs.existsSync(src)) {
    console.log(`⏭️  Bỏ qua (không tìm thấy): ${filename}`);
    continue;
  }

  fs.renameSync(src, dst);
  console.log(`✅ Moved: ${filename} → ${targetDir}/`);

  pathUpdates.push({
    oldPath: `/images/${filename}`,
    newPath:  `/images/${targetDir}/${filename}`,
  });
}

// === Cập nhật tất cả references trong src/ ===
function getAllSrcFiles(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) getAllSrcFiles(full, results);
    else if (/\.(tsx|ts|js|jsx|css|json|html)$/i.test(entry.name)) results.push(full);
  }
  return results;
}

console.log('\n🔄 Cập nhật đường dẫn trong source code...');
const srcFiles = getAllSrcFiles('src');
let totalReplacements = 0;

for (const srcFile of srcFiles) {
  let content = fs.readFileSync(srcFile, 'utf8');
  let changed = false;

  for (const { oldPath, newPath } of pathUpdates) {
    // Case-sensitive replacement với cả dấu nháy đơn và đôi
    if (content.includes(oldPath)) {
      content = content.split(oldPath).join(newPath);
      changed = true;
      totalReplacements++;
    }
    // Thử lowercase filename (Canhan5.JPG → canhan5.jpg không xuất hiện nhưng phòng thủ)
    const oldLower = oldPath.toLowerCase();
    const newLower = newPath.toLowerCase();
    if (oldLower !== oldPath && content.toLowerCase().includes(oldLower)) {
      // Không làm gì — giữ case gốc trong code
    }
  }

  if (changed) {
    fs.writeFileSync(srcFile, content, 'utf8');
    console.log(`  📝 Updated: ${srcFile}`);
  }
}

console.log(`\n✨ Xong! Di chuyển ${Object.keys(MOVE_MAP).length} file, cập nhật ${totalReplacements} đường dẫn trong code.`);
console.log('\n📂 Cấu trúc thư mục mới:');
for (const d of dirs) {
  const files = fs.readdirSync(path.join(IMG_ROOT, d)).filter(f => !f.startsWith('.'));
  console.log(`  images/${d}/  (${files.length} files)`);
  files.forEach(f => console.log(`    - ${f}`));
}
