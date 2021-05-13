let idenButton = document.getElementById('idenButton');
let backButton = document.getElementById('backButton');
let modalBg = document.querySelector('.modal-bg');

idenButton.onclick = toggleVisibility;
backButton.onclick = toggleVisibility;

function toggleVisibility(e){
  e.preventDefault();
  modalBg.classList.toggle('visible');
}