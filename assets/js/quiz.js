/**
 * Array of quiz questions, each containing the question, options, and correct answer.
 * @type {Array<Object>}
 */
const quizData = [
  {
    question: "Do you know how often professional salon tools should be sanitized?",
    options: ["Only if dirty", "Once a day", "After every client", "Once a week"],
    answer: "After every client"
  },
  {
    question: "Which chemical process is used to permanently straighten curly hair types?",
    options: ["Relaxer treatment", "Balayage", "Hair gloss", "Ombre"],
    answer: "Relaxer treatment"
  },
  {
    question: "What is the main purpose of using a heat protectant spray on hair before styling tools?",
    options: ["To add shine", "To help color last longer", "To prevent heat damage", "To protect from UV rays"],
    answer: "To prevent heat damage"
  }
];

let currentQuestion = 0; // Current question index
let score = 0; // User score

// DOM elements
const questionNumberEl = document.getElementById("question-number");
const restartBtn = document.getElementById("restart-btn");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");

/**
 * Loads and displays the current quiz question and answer options.
 * Updates the question number and dynamically creates option buttons.
 */
function loadQuestion() {
  const current = quizData[currentQuestion];

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

/**
 * Checks the selected answer against the correct answer.
 * Updates the score, highlights the correct and incorrect options,
 * and proceeds to the next question or ends the quiz.
 * 
 * @param {string} selected - The answer option selected by the user.
 */
function checkAnswer(selected) {
  const correct = quizData[currentQuestion].answer;
  const allOptions = document.querySelectorAll(".option");

  allOptions.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.style.backgroundColor = "green";
      btn.style.color = "white";
    } else if (btn.textContent === selected) {
      btn.style.backgroundColor = "red";
      btn.style.color = "white";
    }
  });

  if (selected === correct) {
    score++;
  }

  currentQuestion++;

  setTimeout(() => {
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }, 1500);
}

/**
 * Displays the final result after the quiz is completed.
 * Hides the question number and answer options, and shows the restart button.
 */
function showResult() {
  questionNumberEl.textContent = "";
  questionEl.textContent = "Quiz Completed!";
  optionsEl.innerHTML = "";
  resultEl.textContent = `Your score: ${score} out of ${quizData.length}`;
  restartBtn.style.display = "inline-block";
}

/**
 * Resets the quiz to its initial state and restarts it.
 */
restartBtn.onclick = () => {
  currentQuestion = 0;
  score = 0;
  resultEl.textContent = "";
  restartBtn.style.display = "none";
  loadQuestion();
};

/**
 * Initializes the quiz on page load by displaying the first question.
 */
loadQuestion();
