const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const clearHistoryButton = document.getElementById('clear-history-button');
const searchHistoryList = document.getElementById('search-history-list');

let searchHistory = [];

// Load search history from local storage
if (localStorage.getItem('searchHistory')) {
    searchHistory = JSON.parse(localStorage.getItem('searchHistory'));
    renderSearchHistory();
}

// Handle search button click
searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        searchHistory.push(searchTerm);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        renderSearchHistory();
        searchInput.value = '';
    }
});

// Handle clear history button click
clearHistoryButton.addEventListener('click', () => {
    searchHistory = [];
    localStorage.removeItem('searchHistory');
    renderSearchHistory();
});

// Render search history
function renderSearchHistory() {
    searchHistoryList.innerHTML = '';
    searchHistory.forEach((term, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = term;
        searchHistoryList.appendChild(listItem);
    });
}