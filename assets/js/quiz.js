// Array of quiz questions, options, and correct answers
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

// Initialize the current question index and user score
let currentQuestion = 0;
let score = 0;

// Get references to DOM elements
const questionNumberEl = document.getElementById("question-number");
const restartBtn = document.getElementById("restart-btn");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");

/**
 * Loads the current quiz question into the UI.
 * Displays question text, number, and answer options as clickable buttons.
 */
function loadQuestion() {
  const current = quizData[currentQuestion];

  // Show current question number
  questionNumberEl.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;

  // Display the question text
  questionEl.textContent = current.question;
  optionsEl.innerHTML = ""; // Clear previous options

  // Create and display buttons for each answer option
  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.classList.add("option");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option); // Assign click handler
    optionsEl.appendChild(btn);
  });
}

/**
 * Checks the user's selected answer and provides visual feedback.
 * Updates the score if the answer is correct and proceeds to the next question.
 * @param {string} selected - The answer option selected by the user.
 */
function checkAnswer(selected) {
  const correct = quizData[currentQuestion].answer;
  const allOptions = document.querySelectorAll(".option");

  // Disable all answer buttons and apply correct/incorrect styling
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

  // Increment score if the answer is correct
  if (selected === correct) {
    score++;
  }

  // Move to the next question after a short delay
  currentQuestion++;
  setTimeout(() => {
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult(); // Show final result when quiz ends
    }
  }, 1500);
}

/**
 * Displays the user's final quiz score and reveals the restart button.
 */
function showResult() {
  questionNumberEl.textContent = ""; // Clear question number
  questionEl.textContent = "Quiz Completed!";
  optionsEl.innerHTML = ""; // Clear options
  resultEl.textContent = `Your score: ${score} out of ${quizData.length}`;

  // Show restart button to allow the user to retake the quiz
  restartBtn.style.display = "inline-block";
}

/**
 * Resets the quiz state and restarts from the first question.
 */
restartBtn.onclick = () => {
  currentQuestion = 0;
  score = 0;
  resultEl.textContent = ""; // Clear previous score
  restartBtn.style.display = "none"; // Hide restart button
  loadQuestion(); // Start the quiz again
};

// Start the quiz when the script is loaded
loadQuestion();
