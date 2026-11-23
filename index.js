const darkModeToggle = document.getElementById('dark-input');
const body = document.body;

darkModeToggle.checked = false;

darkModeToggle.addEventListener('click', () => {
  if (darkModeToggle.checked) {
    body.classList.add('dark-mode');
  } else if (!darkModeToggle.checked) {
    body.classList.remove('dark-mode');
  }
});
