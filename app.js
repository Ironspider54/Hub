const toggleSwitch = document.querySelector('#mode-switch');

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

function confirmRedirect(event) {
  if (!confirm("Are you sure you want to go to this website?")) {
    event.preventDefault();
  }
}

const links = document.querySelectorAll('a');
links.forEach(link => link.addEventListener('click', confirmRedirect));

toggleSwitch.addEventListener('change', switchTheme, false);
