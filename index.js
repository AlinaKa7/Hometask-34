const textbox = document.getElementById('textbox');
const div = document.getElementById('div');

function onfocus(e) {
  div.style.display = 'block';
}

function onblur(e) {
  div.style.display = 'none';
}

textbox.addEventListener('focus', onfocus);
textbox.addEventListener('blur', onblur);