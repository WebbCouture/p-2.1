import { beautyData } from './beauty.js'; // Importing the beauty data

// Adding event listeners to beauty selection
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        const category = box.id;  // Get the category based on clicked beauty box id
        const beauty = getbeautyByCategory(category); // Retrieve beauty tips or products for the selected category
        displaybeauty(beauty); // Display the beauty related to the beauty category

        const boxes = document.querySelectorAll('.box');
        // Remove active class from all boxes
        boxes.forEach(b => b.classList.remove("active"));
        // Add active class to the clicked box
        box.classList.add("active");
    });
});

/**
 * Retrieves beauty data from the beautyData object based on the selected category.
 * @param {string} category - The selected beauty category (e.g., "hair", "skin").
 * @returns {Array} - Array of beauty items related to the category.
 */
function getbeautyByCategory(category) {
    const categoryData = beautyData[category + 'beauty']; // Access the correct category in the beautyData object
    return categoryData ? categoryData : []; // Return the beauty data or an empty array if not found
}

/**
 * Displays the beauty data in the user interface by creating and appending beauty cards.
 * @param {Array} beauty - Array of beauty items to be displayed.
 */
function displaybeauty(beauty) {
    const contentPlaceholder = document.querySelector('.content-placeholder');
    const contentContainer = document.querySelector('.cards');

    // Remove 'hidden' class to show the placeholder
    contentPlaceholder.classList.remove('hidden');

    contentContainer.innerHTML = ''; // Clear existing content
    beauty.forEach(beauty => {
        const beautyCard = createbeautyCard(beauty); // Create a card element for each beauty item
        contentContainer.appendChild(beautyCard); // Append each beauty card to the container
    });
}

/**
 * Creates a DOM element representing a single beauty card.
 * @param {Object} beauty - An object containing imageUrl, title, and benefits.
 * @returns {HTMLElement} - A div element representing the beauty card.
 */
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
