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
// KEYBOARD CONTROLS:
document.addEventListener("keydown", moveByKeyboardInput);

function moveByKeyboardInput(e) {
    const allowedKeys = [
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
    ];

    if (allowedKeys.includes(e.key)) {
        e.preventDefault();
        switch (e.key) {
            case "ArrowUp":
                move("up");
                break;
            case "ArrowDown":
                move("down");
                break;
            case "ArrowLeft":
                move("left");
                break;
            case "ArrowRight":
                move("right");
                break;
        }
    }
}

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



