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
    question: "What is the purpose of using a heat protecting spray",
    options: ["To add shine", "To help color last longer", "To prevent heat damage", "To protect from UV rays"],
    answer: "To prevent heat damage"
  }
];

let currentQuestion = 0;
let score = 0;

// Get references to the elements
const questionNumberEl = document.getElementById("question-number");
const restartBtn = document.getElementById("restart-btn");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");

// Function to load the current question
function loadQuestion() {
  const current = quizData[currentQuestion];

  // Show question number
  questionNumberEl.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;

  // Set question text
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";

  // Create buttons for each option
  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.classList.add("option");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsEl.appendChild(btn);
  });
}

// Function to check the user's answer
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

// Function to display the result after quiz completion
function showResult() {
  questionNumberEl.textContent = ""; // Hide question number when finished
  questionEl.textContent = "Quiz Completed!";
  optionsEl.innerHTML = "";
  resultEl.textContent = `Your score: ${score} out of ${quizData.length}`;

  // Show restart button after quiz completion
  restartBtn.style.display = "inline-block";
}

// Restart quiz logic
restartBtn.onclick = () => {
  currentQuestion = 0;
  score = 0;
  resultEl.textContent = "";
  restartBtn.style.display = "none"; // Hide restart button again
  loadQuestion();
};

// Initialize the quiz by loading the first question
loadQuestion();

