/* eslint-env browser */
const toggleButton = document.querySelector('.toggle-button');
const body = document.querySelector('body');
const confirmationDialog = document.getElementById('confirmation-dialog');
const confirmationDialogYes = document.getElementById('confirmation-dialog-yes');
const confirmationDialogNo = document.getElementById('confirmation-dialog-no');

function showConfirmationDialog() {
  confirmationDialog.style.display = 'flex';
}

function hideConfirmationDialog() {
  confirmationDialog.style.display = 'none';
}

function toggleTheme() {
  showConfirmationDialog();
}

function setLightTheme() {
  body.classList.remove('dark');
}

function setDarkTheme() {
  body.classList.add('dark');
}

confirmationDialogYes.addEventListener('click', () => {
  hideConfirmationDialog();
  const isDarkMode = body.classList.contains('dark');
  if (isDarkMode) {
    setLightTheme();
  } else {
    setDarkTheme();
  }
});

confirmationDialogNo.addEventListener('click', () => {
  hideConfirmationDialog();
});

toggleButton.addEventListener('click', toggleTheme);
