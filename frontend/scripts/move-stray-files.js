const fs = require('fs');

// Di chuyển 2 file
fs.renameSync('public/diahinh2.2.png', 'public/images/backgrounds/diahinh2.2.png');
console.log('✅ Moved: diahinh2.2.png → images/backgrounds/');

fs.renameSync('public/1792293004306854965.jpg', 'public/images/staff/1792293004306854965.jpg');
console.log('✅ Moved: 1792293004306854965.jpg → images/staff/');

// Cập nhật con-nguoi/page.tsx — diahinh2.2.png dùng trong CSS className
let page = fs.readFileSync('src/app/con-nguoi/page.tsx', 'utf8');
const pageBefore = page;
page = page.replace("bg-[url('/diahinh2.2.png')]", "bg-[url('/images/backgrounds/diahinh2.2.png')]");
if (page !== pageBefore) {
  fs.writeFileSync('src/app/con-nguoi/page.tsx', page, 'utf8');
  console.log('✅ Updated: con-nguoi/page.tsx');
} else {
  console.log('⚠️  No change in page.tsx — path may differ');
}

// Cập nhật con-nguoi/data.tsx
let data = fs.readFileSync('src/app/con-nguoi/data.tsx', 'utf8');
const dataBefore = data;
data = data.split('/1792293004306854965.jpg').join('/images/staff/1792293004306854965.jpg');
if (data !== dataBefore) {
  fs.writeFileSync('src/app/con-nguoi/data.tsx', data, 'utf8');
  console.log('✅ Updated: con-nguoi/data.tsx');
} else {
  console.log('⚠️  No change in data.tsx');
}

console.log('\n✨ Done!');
