const data = {
  tjctf: [
    { id: 'tjctf1', name: 'hidden-message' },
    { id: 'tjctf2', name: 'deep-layers' },
    { id: 'tjctf3', name: 'footprint' }
  ]
};

const params = new URLSearchParams(window.location.search);
const comp = params.get('comp');

const questionListEl = document.getElementById('question-list');

if (comp && data[comp]) {
  data[comp].forEach(question => {
    // Extract the number from the question ID
    const number = question.id.match(/\d+/)?.[0];
    const folderName = `tjctfQ${number}`;
    const link = `../tjctf-question/${folderName}/${question.id}.html?comp=${comp}&id=${question.id}`;

    const li = document.createElement('li');
    li.innerHTML = `<a href="${link}">${question.name}</a>`;
    questionListEl.appendChild(li);
  });
} else {
  questionListEl.textContent = 'Competition not found or no questions available.';
}
