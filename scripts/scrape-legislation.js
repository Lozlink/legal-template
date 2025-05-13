import fs from 'fs';
import puppeteer from 'puppeteer';

const urls = [
  'https://legislation.nsw.gov.au/view/html/inforce/current/act-1900-040',
  'https://legislation.nsw.gov.au/view/html/inforce/current/act-1996-097',
  'https://legislation.nsw.gov.au/view/html/inforce/current/act-2013-018'
];

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const results = {};

  for (const url of urls) {
    console.log(`Scraping ${url}`);
    await page.goto(url, { waitUntil: 'networkidle2' });

    const text = await page.evaluate(() => {
      const el = document.querySelector('main') || document.body;
      return el.innerText;
    });

    const clean = text
      .replace(/\s+/g, ' ')
      .replace(/[\r\n\t]+/g, ' ')
      .trim();

    results[url] = clean.slice(0, 20000); // limit length if needed
  }

  await browser.close();

  fs.writeFileSync('data/legislation.json', JSON.stringify(results, null, 2));
  console.log('Saved legislation content to legislation.json');
})();