const data = {
  picoCTF: [
    { id: 'pico1', name: 'Ph4nt0m 1ntrud3r' },
    { id: 'pico2', name: 'RED' },
    { id: 'pico3', name: 'DISKO 1' },
    { id: 'pico4', name: 'Verify' },
    { id: 'pico5', name: 'Scan Surprise' },
    { id: 'pico6', name: 'Secret of the Polygot' },
    { id: 'pico7', name: 'CanYouSee' },
    { id: 'pico8', name: 'information' },
    { id: 'pico9', name: 'Glory of the Garden' }
  ]
};

const params = new URLSearchParams(window.location.search);
const comp = params.get('comp');

const questionListEl = document.getElementById('question-list');

if (comp && data[comp]) {
  data[comp].forEach(question => {
    // Extract the number from the question ID, e.g., "pico1" → "1"
    const number = question.id.match(/\d+/)?.[0];
    const folderName = `picoQ${number}`;
    const link = `../picoCTF-forensics/${folderName}/${question.id}.html?comp=${comp}&id=${question.id}`;

    const li = document.createElement('li');
    li.innerHTML = `<a href="${link}">${question.name}</a>`;
    questionListEl.appendChild(li);
  });
} else {
  questionListEl.textContent = 'Competition not found or no questions available.';
}
