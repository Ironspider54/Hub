function redirect(url) {
  window.location.href = url;
}

function toggleMode() {
  const body = document.querySelector('body');
  const toggle = document.querySelector('.toggle input[type="checkbox"]');
  
  if (toggle.checked) {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
}
