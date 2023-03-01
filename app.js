const toggleButton = document.getElementById('toggle-button');
const container = document.getElementById('container');

toggleButton.addEventListener('click', function() {
  container.classList.toggle('dark');
  
  if (container.classList.contains('dark')) {
    if (confirm("Are you sure you want to switch to dark mode?")) {
      // user clicked OK
    } else {
      container.classList.remove('dark');
    }
  }
});
