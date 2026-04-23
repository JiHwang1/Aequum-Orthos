const fs = require('fs');
const path = require('path');

function walkSync(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      if (!dirFile.includes('node_modules')) {
        filelist = walkSync(dirFile, filelist);
      }
    } else {
      if (dirFile.endsWith('.tsx') && !dirFile.includes('layout.tsx')) {
         filelist.push(dirFile);
      }
    }
  });
  return filelist;
}

const targetFiles = walkSync(path.join(__dirname, '../app'));

targetFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Remove generateMetadata
  content = content.replace(/export async function generateMetadata[^<]*?(?=(export default function|const|function))/gs, '');
  
  // Remove const metadata
  content = content.replace(/export const metadata = \{[^}]+\};/gs, '');

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log("Removed metadata from", file);
  }
});
