import fs from 'fs';
import puppeteer from 'puppeteer';

const url = 'https://legislation.nsw.gov.au/view/html/inforce/current/act-1900-040';

const fetchOffences = async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 0 });

  const results = await page.evaluate(() => {
    const data = [];
    const clauses = document.querySelectorAll('.frag-clause');
  
    clauses.forEach(clause => {
      const text = clause.innerText.trim();
      if (!text.toLowerCase().includes('maximum penalty')) return;
  
      const penaltyMatch = text.match(/Maximum penalty[:—]?\s*(.+?)(?:\.|\n|$)/i);
      if (!penaltyMatch) return;
  
      const beforePenalty = text.split(/Maximum penalty[:—]?/i)[0];
      const sentences = beforePenalty.match(/[^.!?]+[.!?]+/g) || [];
      const offence = sentences[sentences.length - 1]?.trim();
  
      if (offence && penaltyMatch[1]) {
        data.push({
          offence,
          penalty: penaltyMatch[1].trim()
        });
      }
    });
  
    return data;
  });

  if (!results.length) {
    console.log('⚠️ No offences found. The pattern might need tweaking.');
  } else {
    fs.writeFileSync(
      './offences.csv',
      'offence,penalty\n' +
        results.map(o => `"${o.offence.replace(/"/g, '""')}","${o.penalty.replace(/"/g, '""')}"`).join('\n')
    );
    console.log(`✅ ${results.length} offences written to offences.csv`);
  }

  await browser.close();
};

fetchOffences();