/**
 * identify-connguoi-images.js
 * Extracts all unique image paths from data.tsx to build a registry of images for this section.
 */
const fs = require('fs');
const path = require('path');

const dataFile = 'src/app/con-nguoi/data.tsx';
if (!fs.existsSync(dataFile)) {
  console.error('Data file not found!');
  process.exit(1);
}

const content = fs.readFileSync(dataFile, 'utf8');
// RegEx to match string paths like "/images/..." and "encodeURI('/images/...')"
const regex = /"(\/images\/[^"]+)"|'(\/images\/[^']+)'/g;
let match;
const rawPaths = new Set();

while ((match = regex.exec(content)) !== null) {
  const found = match[1] || match[2];
  if (found.includes('?v=')) {
    rawPaths.add(found.split('?v=')[0]);
  } else {
    rawPaths.add(found);
  }
}

console.log(`Found ${rawPaths.size} raw paths referenced in data.tsx.`);

const results = {};
let totalSizeBytes = 0;
const missing = [];

rawPaths.forEach(webPath => {
  // Correct for encodeURI cases if they were fully decoded or encoded in regex
  const normalized = decodeURI(webPath);
  const fullPath = path.join('public', normalized.replace(/^\//, ''));
  
  let size = 0;
  let exists = false;
  
  try {
    if (fs.existsSync(fullPath)) {
      const stat = fs.statSync(fullPath);
      size = stat.size;
      totalSizeBytes += size;
      exists = true;
    } else {
      missing.push(normalized);
    }
  } catch (e) {}

  if (exists) {
    // Categorize based on directory
    const parts = normalized.replace(/^\/images\//, '').split('/');
    const folder = parts.length > 1 ? parts[0] : 'root';
    
    if (!results[folder]) {
      results[folder] = { count: 0, size: 0, files: [] };
    }
    results[folder].count++;
    results[folder].size += size;
    results[folder].files.push({ path: normalized, size });
  }
});

console.log('\n================================================');
console.log('TÓM TẮT ẢNH THEO THƯ MỤC');
console.log('================================================');

Object.keys(results).sort().forEach(folder => {
  const data = results[folder];
  console.log(`${folder.toUpperCase()}:`);
  console.log(`  Số lượng: ${data.count} file`);
  console.log(`  Tổng size: ${(data.size / 1024 / 1024).toFixed(2)} MB`);
  // Print largest file
  const largest = data.files.sort((a, b) => b.size - a.size)[0];
  console.log(`  File lớn nhất: ${path.basename(largest.path)} (${(largest.size / 1024 / 1024).toFixed(2)} MB)`);
  console.log('');
});

console.log('------------------------------------------------');
console.log(`TỔNG CỘNG: ${(totalSizeBytes / 1024 / 1024).toFixed(2)} MB cho toàn bộ các file đã kiểm tra.`);
console.log(`Số file missing/404: ${missing.length}`);
if (missing.length > 0) {
  console.log('Missing sample:', missing.slice(0, 5));
}

// Dump raw list ordered by size for precise analysis
const allFileObjects = [];
Object.values(results).forEach(d => {
  d.files.forEach(f => allFileObjects.push(f));
});
allFileObjects.sort((a, b) => b.size - a.size);

fs.writeFileSync('scripts/_connguoi_files_report.json', JSON.stringify(allFileObjects, null, 2));
console.log('\nĐã ghi chi tiết tất cả file vào: scripts/_connguoi_files_report.json');
