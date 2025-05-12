import fs from 'fs';

const laws = JSON.parse(fs.readFileSync('./laws.json', 'utf-8'));

const cleanText = (text) => {
  return text
    .replace(/\n+/g, ' ')                            
    .replace(/\s{2,}/g, ' ')                         
    .replace(/\./g, ' ')                            
    .replace(/\b(section|part|division)\s?\d+\w*/gi, '')  
    .replace(/\b(s\.|ss\.)\s?\d+\w*/gi, '')          
    .replace(/\d+(\.\d+)*\s*/g, '')                  
    .replace(/[–—-]/g, ' - ')                        
    .replace(/\s+/g, ' ')                            
    .trim();
};

const cleaned = {};

for (const [area, text] of Object.entries(laws)) {
  cleaned[area] = cleanText(text);
}

fs.writeFileSync('./laws-cleaned.json', JSON.stringify(cleaned, null, 2));
console.log('✅ Cleaned laws written to laws-cleaned.json');
