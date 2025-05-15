import legislation from '../../data/legislation.json'

export function findRelevantSections(question) {
  const results = [];
  const lowerQuestion = question.toLowerCase();

  Object.entries(legislation).forEach(([url, sections]) => {
    sections.forEach(section => {

      const sectionText = `${section.heading} ${section.content}`.toLowerCase();

      if (sectionText.includes(lowerQuestion)) {
        results.push({
          url,
          sectionNumber: section.sectionNumber,
          heading: section.heading,
          excerpt: (`${section.heading} ${section.content}`).substring(
            section.indexOf(lowerQuestion),
            section.indexOf(lowerQuestion) + 500
          ),
        });
      }
    })
  });
  return results;
}