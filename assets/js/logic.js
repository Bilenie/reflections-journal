const modeToggle = document.getElementById('mode-toggle');
const modeIcon = document.getElementById('mode-icon');

// Function to toggle dark mode
modeToggle.addEventListener('change', function() {
  if (modeToggle.checked) {
    enableDarkMode();
  } else {
    enableLightMode();
  }
});

// Function to enable dark mode
function enableDarkMode() {
  document.body.classList.add('dark-mode');
  modeIcon.textContent = '🌙'; // Emoji for crescent moon (dark mode)
  localStorage.setItem('isDarkMode', true); // Store dark mode state
}

// Function to enable light mode
function enableLightMode() {
  document.body.classList.remove('dark-mode');
  modeIcon.textContent = '🌞'; // Emoji for sun (light mode)
  localStorage.setItem('isDarkMode', false); // Store light mode state
}

// Initial state based on localStorage or default
const isDarkMode = JSON.parse(localStorage.getItem('isDarkMode')) || false;
if (isDarkMode) {
  enableDarkMode();
  modeToggle.checked = true;
} else {
  enableLightMode();
}
