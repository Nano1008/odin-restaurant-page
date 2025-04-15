import "./styles.css";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

// Function to clear the content div
function clearContent() {
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = '';
}

// get all tab buttons
const tabs = document.querySelectorAll('.tab');

// Add event listeners to each tab button
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        clearContent();
        if (tab.id === 'home') {
            home();
        } else if (tab.id === 'menu') {
            menu();
        } else if (tab.id === 'contact') {
            contact();
        }
    });
});

// Load the home page by default
home();
