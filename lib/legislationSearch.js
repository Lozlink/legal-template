import legislation from '../../data/legislation.json'

export function findRelevantSections(question) {
  const results = [];

  Object.entries(legislation).forEach(([url, content]) => {
    const lowerQuestion = question.toLowerCase();

    if (content.toLowerCase().includes(lowerQuestion)) {
      results.push({
        url,
        excerpt: content.substring(
          content.toLowerCase().indexOf(lowerQuestion),
          content.toLowerCase().indexOf(lowerQuestion) + 500
        ),
      });
    }
  });

  return results;
}