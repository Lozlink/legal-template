import fs from 'fs';
import { createObjectCsvWriter } from 'csv-writer';

// Load cleaned law content
const laws = JSON.parse(fs.readFileSync('./laws-cleaned.json', 'utf-8'));

const allQuestions = {
  "Criminal Law": [
    "What is considered a serious indictable offence in NSW?",
    "What are the penalties for violent offences under NSW criminal law?",
    "What is the law around sexual offences in NSW?",
    "How does the law define consent in sexual offences?",
    "What are public order offences in NSW?"
  ],
  "Traffic Law": [
    "What are common traffic offences in NSW?",
    "What are the penalties for drink driving?",
    "How can I dispute a speeding ticket in NSW?",
    "When can your licence be suspended?",
    "What are the rules around mobile phone use while driving?"
  ],
  "Civil Law": [
    "What types of disputes fall under civil law in NSW?",
    "What is the process for filing a civil lawsuit?",
    "What does 'negligence' mean in civil law?",
    "What are typical remedies in a civil case?",
    "Can you go to court without a lawyer in a civil case?"
  ],
  "Property Law": [
    "What is conveyancing and why is it important?",
    "How do property titles work in NSW?",
    "What is a lease agreement?",
    "What are common property disputes?",
    "What happens during a property settlement?"
  ]
};

// Function to find a relevant answer based on keywords
const findRelevantAnswer = (text, question) => {
  const keywords = question
    .replace(/[^\w\s]/g, '')
    .toLowerCase()
    .split(' ')
    .filter(word => word.length > 3);

  const sentences = text.split('. ');
  let answer = "Information not available.";

  sentences.forEach(sentence => {
    if (keywords.some(keyword => sentence.toLowerCase().includes(keyword))) {
      answer = sentence + '.';
    }
  });

  return answer;
};

// Build rows for CSV
const rows = [];

for (const [category, questions] of Object.entries(allQuestions)) {
  const text = laws[category] || '';
  
  questions.forEach(question => {
    const answer = findRelevantAnswer(text, question);
    rows.push({ question, answer });
  });
}

// Write to CSV
const csvWriter = createObjectCsvWriter({
  path: './lyro-faqs.csv',
  header: [
    { id: 'question', title: 'question' },
    { id: 'answer', title: 'answer' }
  ]
});

csvWriter.writeRecords(rows).then(() => {
  console.log('✅ lyro-faqs.csv created and ready for Tidio import.');
});