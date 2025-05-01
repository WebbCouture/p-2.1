// script.js
import { beautyData } from './beauty.js'; // Importing the beauty data

// Adding event listeners to body part selection
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        const category = box.id;  // Get the category based on clicked body part
        const beauty = getbeautyByCategory(category);
        displaybeauty(beauty); // Display the beauty related to the body part

        const boxes = document.querySelectorAll('.box');
        // Remove active class from all boxes
        boxes.forEach(b => b.classList.remove("active"));
        // Add active class to the clicked box
        box.classList.add("active");
    });
});

const correctPassword = "1234"; // Change to your preferred password

function checkPassword() {
  const userInput = prompt("Enter password:");
  if (userInput === correctPassword) {
    document.getElementById("protectedContent").style.display = "block";
  } else {
    alert("Incorrect password. Access denied.");
    document.body.innerHTML = "<h1>Access Denied</h1>";
  }
}

window.onload = checkPassword;

// Function to get beauty based on the category selected
function getbeautyByCategory(category) {
    const categoryData = beautyData[category + 'beauty']; // Access the correct category in the beautyData object
    return categoryData ? categoryData : []; // Return the beauty data or an empty array if not found
}

// Function to display the beauty in the UI
function displaybeauty(beauty) {
    const contentContainer = document.querySelector('.cards');
    contentContainer.innerHTML = ''; // Clear existing content
    beauty.forEach(beauty => {
        const beautyCard = createbeautyCard(beauty);
        contentContainer.appendChild(beautyCard); // Append each beauty card to the container
    });
}

// Function to create a beauty card element
function createbeautyCard(beauty) {
    const card = document.createElement('div');
    card.classList.add('beauty-card');
    card.innerHTML = `
        <div class="card-header">
            <img src="${beauty.imageUrl}" alt="${beauty.title}">
        </div>
        <div class="card-content">
            <h3 class="beauty-title">${beauty.title}</h3>
            <p class="beauty-benefits">${beauty.benefits}</p>
            <a class="beauty-link" href="https://www.capitalhairandbeauty.co.uk/?srsltid=AfmBOopIOnZpjH2pwCfqTfustzOEMcT0ofkMxCkcZ0K4BjvyBknE6tS7" target="_blank">Visit site</a>
        </div>
    `;
    return card;
}

document.addEventListener("DOMContentLoaded", function () {
    const user = {
        isLoggedIn: false,
        firstName: 'Alex',
        email: 'alex@example.com'
    };
    
    if (user.isLoggedIn) {
        form = document.querySelector("form");
        form.fName.value = user.firstName;

    }     
});

// Game 
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
      answer: "To protect from UV rays"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const resultEl = document.getElementById("result");
  
  function loadQuestion() {
    const current = quizData[currentQuestion];
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
    questionEl.textContent = "Quiz Completed!";
    optionsEl.innerHTML = "";
    resultEl.textContent = `Your score: ${score} out of ${quizData.length}`;
  }
  
  loadQuestion();

// BUTTON CLICKS
const buttons = document.querySelectorAll("#buttons button");
for (let button of buttons) {
    button.addEventListener("click", moveByButtonClick);
}

function moveByButtonClick(e) {
    let direction = e.target.getAttribute("data-direction");
    move(direction);
}

// FUNCTION TO MOVE PLAYER - DO NOT CHANGE!
function move(direction) {
    let player = document.getElementById("player");
    let currentTopPx = parseFloat(player.style.top);
    let currentLeftPx = parseFloat(player.style.left);
    
    switch (direction) {
        case "up":
            currentTopPx -= 12.5;
            break;
        case "down":
            currentTopPx += 12.5;
            break;
        case "left":
            currentLeftPx -= 12.5;
            break;
        case "right":
            currentLeftPx += 12.5;
            break;
        default:
            alert("Not a valid input");
    }
    
    player.style.top = currentTopPx.toFixed(1) + "px";
    player.style.left = currentLeftPx + "px";
}

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission
    alert("Form has been submitted!");
  });


