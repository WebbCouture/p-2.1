/**  Import the beauty data from the JSON file */
import { beautyData } from './beauty.js';

/** Add event listeners to each beauty box */
document.querySelectorAll('.box').forEach(function (box) {
    box.addEventListener('click', function () {
        const category = box.id;
        const beautyItems = getBeautyByCategory(category);
        displayBeauty(beautyItems);

        document.querySelectorAll('.box').forEach(function (b) {
            b.classList.remove("active");
        });
        box.classList.add("active");
    });
});

/**
 * Retrieves beauty data for a given category.
 * @param {string} category - The selected beauty category.
 * @returns {Array} - An array of beauty items, or an empty array if not found.
 */
function getBeautyByCategory(category) {
    const key = category + 'beauty';
    return Array.isArray(beautyData[key]) ? beautyData[key] : [];
}

/**
 * Displays the beauty data by generating beauty cards.
 * @param {Array} items - Array of beauty items to display.
 */
function displayBeauty(items) {
    const contentPlaceholder = document.querySelector('.content-placeholder');
    const contentContainer = document.querySelector('.cards');

    contentPlaceholder.classList.remove('hidden');
    contentContainer.innerHTML = '';

    items.forEach(function (item) {
        const card = createBeautyCard(item);
        contentContainer.appendChild(card);
    });
}

/**
 * Creates a DOM element for a single beauty card.
 * @param {Object} item - Object containing imageUrl, title, and benefits.
 * @returns {HTMLElement} - A fully constructed beauty card element.
 */
function createBeautyCard(item) {
    const card = document.createElement('div');
    card.classList.add('beauty-card');
    card.innerHTML = `
        <div class="card-header">
            <img src="${item.imageUrl}" alt="${item.title}">
        </div>
        <div class="card-content">
            <h3 class="beauty-title">${item.title}</h3>
            <p class="beauty-benefits">${item.benefits}</p>
            <a class="beauty-link" href="https://www.capitalhairandbeauty.co.uk" target="_blank" rel="noopener noreferrer">Visit site</a>
        </div>
    `;
    return card;
}
