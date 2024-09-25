function toggleMenu() {
    const menu = document.querySelector(".menu-list");
    const icon = document.querySelector(".ham-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
// Get the toggle button and body elements

const toggleButton = document.querySelector('.toggle-button');
const body = document.body;

// Add event listener to toggle button

toggleButton.addEventListener('click', () => {
  // Toggle the dark theme class on the body element
  body.classList.toggle('dark-theme');

  // Update the toggle button text
  if (body.classList.contains('dark-theme')) {
    toggleButton.textContent = 'Light';
  } else {
    toggleButton.textContent = 'Dark';
  }

});