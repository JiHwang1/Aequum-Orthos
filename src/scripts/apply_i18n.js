const fs = require('fs');
const path = require('path');

const dictStr = fs.readFileSync(path.join(__dirname, '../data/translations.json'), 'utf8');
const dict = JSON.parse(dictStr).KR;

const phrases = Object.keys(dict).filter(k => k !== 'Aequum Orthos').sort((a,b) => b.length - a.length);

function walkSync(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      if (!dirFile.includes('node_modules')) {
        filelist = walkSync(dirFile, filelist);
      }
    } else {
      if (dirFile.endsWith('.tsx') && !dirFile.includes('navbar.tsx') && !dirFile.includes('layout.tsx') && !dirFile.includes('page.tsx')) {
         // but wait, I want to replace layout.tsx and page.tsx! 
      }
      if (dirFile.endsWith('.tsx') && !dirFile.includes('navbar.tsx') && !dirFile.includes('LanguageContext.tsx')) {
         // I'll manually include all 
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

  // Add "use client" if not there, because we use contexts
  if (!content.includes('"use client"') && !content.includes("'use client'")) {
    content = '"use client";\n\n' + content;
  }
  
  if (!content.includes('useLanguage')) {
    content = content.replace(/(import .*;\n)+/, match => match + `import { useLanguage } from "@/components/LanguageContext";\n`);
  }

  // Identify main component
  const compMatch = content.match(/export default function ([A-Za-z0-9_]+)/);
  if (compMatch && !content.includes('const { t } = useLanguage()')) {
    const fnDecl = compMatch[0];
    content = content.replace(new RegExp(fnDecl + '\\s*\\([^)]*\\)\\s*\\{'), match => match + `\n  const { t } = useLanguage();\n`);
  }

  // Just do simple replacements for known phrases (only outside of import/export logic)
  // To avoid breaking attributes, we replace > Phrase < with > {t("Phrase")} <
  // For strings in tags, e.g. "Phrase" 
  phrases.forEach(p => {
    // Escape regex completely
    const escapedP = p.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex1 = new RegExp(`>\\s*${escapedP}\\s*<`, 'g');
    content = content.replace(regex1, `>{t("${p}")}<`);
    
    // Check for phrases inside quotes like placeholder="Phrase"
    const regex2 = new RegExp(`placeholder="${escapedP}"`, 'g');
    content = content.replace(regex2, `placeholder={t("${p}")}`);
    
    const regex3 = new RegExp(`>\\s*${escapedP}\\s*`, 'g');
    content = content.replace(regex3, `>{t("${p}")} `);
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log("Updated", file);
  }
});
