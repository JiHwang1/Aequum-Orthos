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
      if (dirFile.endsWith('.tsx')) {
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

  if (content.includes('const { t } = useLanguage()') && !content.includes('useLanguage }')) {
    // Missing import! Add it right after "use client";
    content = content.replace('"use client";', '"use client";\nimport { useLanguage } from "@/components/LanguageContext";\n');
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log("Added missing import to", file);
  }
});
