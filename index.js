const darkModeToggle = document.getElementById('dark-input');
const body = document.body;

let dark = localStorage.getItem('darkMode');

function enableDark() {
  body.classList.add('dark-mode');
  localStorage.setItem('darkMode', 'enabled');
}

function disableDark() {
  body.classList.remove('dark-mode');
  localStorage.setItem('darkMode', 'disabled');
}

if (dark === 'enabled') {
  enableDark();
}

darkModeToggle.addEventListener('click', () => {
  dark = localStorage.getItem('darkMode');

  if (dark === 'disabled') {
    enableDark();
  } else {
    disableDark();
  }
});
