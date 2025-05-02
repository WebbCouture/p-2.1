const quizData = [
  {
      question: "How often should professional salon tools be sanitized?",
      options: ["Only if dirty", " Once a day", "After every client", "Once a week"],
      answer: "After every client"
  },
  {
      question: "Which of the following is a chemical process used to permanently straighten curly hair?",
      options: ["Relaxer treatment", "Balayage", " Hair gloss", "Ombre"],
      answer: "Relaxer treatment"
  },
  {
      question: "What is the purpose of using a heat protectant spray",
      options: ["To add shine", "To help color last longer", "To prevent heat damage", "To protect from UV rays"],
      answer: "To prevent heat damage"
  }
];

let currentQuestion = 0;
let score = 0;

// 👇 ADD this to get the element that will show question number
const questionNumberEl = document.getElementById("question-number");

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");

function loadQuestion() {
  const current = quizData[currentQuestion];

  // 👇 Show the question number like "Question 1 of 3"
  questionNumberEl.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;

  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";

  current.options.forEach(option => {
      const btn = document.createElement("button");
      btn.classList.add("option");
      btn.textContent = option;
      btn.onclick = () => checkAnswer(option);
      optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = quizData[currentQuestion].answer;
  if (selected === correct) {
      score++;
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
      loadQuestion();
  } else {
      showResult();
  }
}

function showResult() {
  questionNumberEl.textContent = ""; // 👈 Hide question number when finished
  questionEl.textContent = "Quiz Completed!";
  optionsEl.innerHTML = "";
  resultEl.textContent = `Your score: ${score} out of ${quizData.length}`;
}

loadQuestion();