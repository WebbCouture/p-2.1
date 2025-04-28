// script.js
import { herbData } from './herbs.js'; // Importing the herb data

// Adding event listeners to body part selection
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        const category = box.id;  // Get the category based on clicked body part
        const herbs = getHerbsByCategory(category);
        displayHerbs(herbs); // Display the herbs related to the body part

        const boxes = document.querySelectorAll('.box');
        // Remove active class from all boxes
        boxes.forEach(b => b.classList.remove("active"));
        // Add active class to the clicked box
        box.classList.add("active");
    });
});

// Function to get herbs based on the category selected
function getHerbsByCategory(category) {
    const categoryData = herbData[category + 'Herbs']; // Access the correct category in the herbData object
    return categoryData ? categoryData : []; // Return the herb data or an empty array if not found
}

// Function to display the herbs in the UI
function displayHerbs(herbs) {
    const contentContainer = document.querySelector('.cards');
    contentContainer.innerHTML = ''; // Clear existing content
    herbs.forEach(herb => {
        const herbCard = createHerbCard(herb);
        contentContainer.appendChild(herbCard); // Append each herb card to the container
    });
}

// Function to create a herb card element
function createHerbCard(herb) {
    const card = document.createElement('div');
    card.classList.add('herb-card');
    card.innerHTML = `
        <div class="card-header">
            <img src="${herb.imageUrl}" alt="${herb.title}">
        </div>
        <div class="card-content">
            <h3 class="herb-title">${herb.title}</h3>
            <p class="herb-benefits">${herb.benefits}</p>
            <a class="herb-link" href="#" target="_blank">Learn more</a>
        </div>
    `;
    return card;
}