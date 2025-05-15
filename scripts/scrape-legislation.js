
import fs from 'fs';
import puppeteer from 'puppeteer';

const urls = [
  'https://legislation.nsw.gov.au/view/whole/html/inforce/current/act-1900-040',
  'https://legislation.nsw.gov.au/view/whole/html//inforce/current/act-1996-097',
  'https://legislation.nsw.gov.au/view/whole/html/inforce/current/act-2013-018'
];

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const results = {};
 
  for (const url of urls) {
    console.log(`Scraping ${url}`);
    await page.goto(url, { waitUntil: 'networkidle0' });
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const sections = await page.evaluate(() => {
      const clauses = document.querySelectorAll('.frag-clause')
      const data = [];
      // is this even how their elements are structed? Find out tomorrow on the next episode of dragon ball z
       
    
      clauses.forEach((clause) => {
        const sectionNumber = clause.querySelector('.frag-no')?.innerText || ''
        const heading = clause.querySelector('.frag-heading')?.innerText || '';
        
        const paragraphs = Array.from(clause.querySelectorAll('blockquote'))
        .map(p => p.innerText.trim())
        .filter(Boolean);
        const fullText = paragraphs.join(' ');
        console.log(fullText)

        if (/penalty|fine|imprisonment|offence/i.test(fullText)) {
          data.push({
            sectionNumber,
            heading,
            content: fullText
          });
        }
      });
       
      return data;
    });
    
    results[url] = sections
  }

  await browser.close();

  fs.writeFileSync('data/legislation.json', JSON.stringify(results, null, 2));
  console.log('Saved legislation content to legislation.json');
})();


// import fs from 'fs';
// import puppeteer from 'puppeteer';

// const urls = [
//   'https://legislation.nsw.gov.au/view/html/inforce/current/act-1900-040',
//   'https://legislation.nsw.gov.au/view/html/inforce/current/act-1996-097',
//   'https://legislation.nsw.gov.au/view/html/inforce/current/act-2013-018'
// ];

// (async () => {
//   const browser = await puppeteer.launch({ headless: true });
//   const page = await browser.newPage();

//   const results = {};

//   for (const url of urls) {
//     console.log(`Scraping ${url}`);
//     await page.goto(url, { waitUntil: 'networkidle2' });

//     const text = await page.evaluate(() => {
//       const el = document.querySelector('main') || document.body;
//       return el.innerText;
//     });

//     const clean = text
//       .replace(/\s+/g, ' ')
//       .replace(/[\r\n\t]+/g, ' ')
//       .trim();

//     results[url] = clean.slice(0, 20000); // limit length if needed
//   }

//   await browser.close();

//   fs.writeFileSync('data/legislation.json', JSON.stringify(results, null, 2));
//   console.log('Saved legislation content to legislation.json');
// })();

// import fs from 'fs';
// import puppeteer from 'puppeteer';

// const urls = [
//   'https://legislation.nsw.gov.au/view/html/inforce/current/act-1900-040',
//   'https://legislation.nsw.gov.au/view/html/inforce/current/act-1996-097',
//   'https://legislation.nsw.gov.au/view/html/inforce/current/act-2013-018'
// ];

// (async () => {
//   const browser = await puppeteer.launch({ headless: true });
//   const page = await browser.newPage();

//   const results = {};

//   for (const url of urls) {
//     console.log(`Scraping ${url}`);
//     await page.goto(url, { waitUntil: 'networkidle0' });

    
//     await page.evaluate(async () => {
//       await new Promise(resolve => {
//         let totalHeight = 0;
//         const distance = 500;
//         const timer = setInterval(() => {
//           window.scrollBy(0, distance);
//           totalHeight += distance;

//           if (totalHeight >= document.body.scrollHeight) {
//             clearInterval(timer);
//             resolve();
//           }
//         }, 300);
//       });
//     });

//    await Promise.all([
    
//    ])
    

//     // Evaluate and extract only relevant clauses
//     const filteredSections = await page.evaluate(() => {
//       const clauses = document.querySelectorAll('.frag-clause');
//       const data = [];

//       clauses.forEach(clause => {
//         const sectionNumber = clause.querySelector('.frag-no')?.innerText || '';
//         const heading = clause.querySelector('.frag-heading')?.innerText || '';
//         const paragraphs = Array.from(clause.querySelectorAll('blockquote'))
//           .map(p => p.innerText.trim())
//           .filter(Boolean);
//         const fullText = paragraphs.join(' ');

//         // Match keywords
//         if (/penalty|fine|imprisonment|offence/i.test(fullText)) {
//           data.push({
//             sectionNumber,
//             heading,
//             content: fullText
//           });
//         }
//       });

//       return data;
//     });

//     results[url] = filteredSections;
//   }

//   await browser.close();

//   fs.writeFileSync('data/legislation.json', JSON.stringify(results, null, 2));
//   console.log('✅ Saved filtered legislation content to data/legislation.json');
// })();