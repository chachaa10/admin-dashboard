const themeSwitcher = document.getElementById('theme-switcher');
const body = document.body;

const applyTheme = (theme) => {
  body.classList.remove('theme-light', 'theme-dark');
  if (theme) {
    body.classList.add(`theme-${theme}`);
  }
  localStorage.setItem('theme', theme);
};

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  applyTheme(savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  applyTheme('dark');
} else {
  applyTheme('light');
}

themeSwitcher.addEventListener('click', (event) => {
  event.preventDefault();

  let currentTheme = '';
  if (body.classList.contains('theme-light')) {
    currentTheme = 'light';
  } else if (body.classList.contains('theme-dark')) {
    currentTheme = 'dark';
  } else {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      currentTheme = 'dark';
    } else {
      currentTheme = 'light';
    }
  }

  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
});

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (event) => {
    if (!localStorage.getItem('theme')) {
      applyTheme(event.matches ? 'dark' : 'light');
    }
  });
