document.addEventListener('DOMContentLoaded', function() {
  const modeToggle = document.getElementById('mode-toggle');
  const modeIcon = document.getElementById('mode-icon');

  modeToggle.addEventListener('change', function() {
    if (modeToggle.checked) {
      document.body.classList.add('dark-mode');
      modeIcon.textContent = '🌙'; // Emoji for crescent moon (dark mode)
    } else {
      document.body.classList.remove('dark-mode');
      modeIcon.textContent = '🌞'; // Emoji for sun (light mode)
    }
  });

  // Initial state based on localStorage or default
  const isDarkMode = JSON.parse(localStorage.getItem('isDarkMode')) || false;
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
    modeIcon.textContent = '🌙';
    modeToggle.checked = true;
  }
});
