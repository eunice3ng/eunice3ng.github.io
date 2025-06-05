const data = {
  picoCTF: [
    { id: 'pico1', name: 'Web Exploit 101' },
    { id: 'pico2', name: 'Stego Challenge' },
    { id: 'pico3', name: 'Crypto Puzzle' }
  ]
};

const params = new URLSearchParams(window.location.search);
const comp = params.get('comp');

const questionListEl = document.getElementById('question-list');

if (comp && data[comp]) {
  data[comp].forEach(question => {
    const li = document.createElement('li');
    // Assuming your writeups are named like pico1.html, pico2.html, etc
    li.innerHTML = `<a href="${question.id}.html?comp=${comp}&id=${question.id}">${question.name}</a>`;
    questionListEl.appendChild(li);
  });
} else {
  questionListEl.textContent = 'Competition not found or no questions available.';
}
