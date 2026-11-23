const darkModeToggle = document.getElementById('dark-input');
const body = document.body;

let darkMode = localStorage.getItem('darkMode');

function enableDark() {
  body.classList.add('dark-mode');
  darkModeToggle.setAttribute('checked', true);
  localStorage.setItem('darkMode', 'enabled');
}

function disableDark() {
  body.classList.remove('dark-mode');
  darkModeToggle.setAttribute('checked', false);
  localStorage.setItem('darkMode', 'disabled');
}

if (darkMode === 'enabled') {
  enableDark();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');

  if (darkMode !== 'enabled') {
    enableDark();
  } else {
    disableDark();
  }
});
