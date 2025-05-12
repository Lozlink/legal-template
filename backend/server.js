import fs from 'fs';
import axios from 'axios';
import pdf from 'pdf-parse/lib/pdf-parse.js';

const acts = {
  "Criminal Law": 'https://legislation.nsw.gov.au/view/whole/pdf/inforce/2025-05-08/act-1900-040',
  "Traffic Law": 'https://legislation.nsw.gov.au/view/whole/pdf/inforce/2025-05-08/act-2013-018',
  "Civil Law": 'https://legislation.nsw.gov.au/view/whole/pdf/inforce/2025-05-08/act-2005-028',
  "Property Law": 'https://legislation.nsw.gov.au/view/whole/pdf/inforce/2025-05-08/act-1919-006',
};

// 🔍 Keywords for each category
const keywordFilters = {
  "Criminal Law": ['offence', 'indictable', 'penalty', 'charge', 'summary'],
  "Traffic Law": ['traffic', 'vehicle', 'road', 'driver', 'license', 'speeding'],
  "Civil Law": ['civil', 'dispute', 'compensation', 'tort', 'litigation'],
  "Property Law": ['property', 'land', 'title', 'ownership', 'conveyancing'],
};

const downloadPDF = async (url) => {
  const response = await axios.get(url, { responseType: 'arraybuffer' });
  return response.data;
};

const filterText = (text, keywords) => {
  const lines = text.split('\n');
  return lines
    .filter((line) =>
      keywords.some((kw) =>
        line.toLowerCase().includes(kw.toLowerCase())
      )
    )
    .join('\n');
};

const scrapeAllActs = async () => {
  const laws = {};

  for (const [area, url] of Object.entries(acts)) {
    try {
      console.log(`🔽 Downloading and parsing ${area}...`);
      const pdfData = await downloadPDF(url);
      const parsed = await pdf(pdfData);

      const filtered = filterText(parsed.text, keywordFilters[area]);
      laws[area] = filtered.length > 0 ? filtered : 'No relevant sections found';

      console.log(`✅ Done: ${area}`);
    } catch (err) {
      console.error(`❌ Failed to process ${area}:`, err.message);
      laws[area] = 'Error fetching or parsing';
    }
  }

  fs.writeFileSync('laws.json', JSON.stringify(laws, null, 2));
  console.log('📝 Saved filtered content to laws.json');
};

scrapeAllActs();