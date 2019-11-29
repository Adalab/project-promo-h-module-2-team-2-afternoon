'use strict'

const inputElements = document.querySelectorAll('input');
const createButtonElement = document.getElementById('create-button');
const error = document.querySelector('.error');
const linkShare = document.querySelector('.link-share');
function validateInputs() {
  for(let i = 0; i < inputElements.length; i++) {
    if (inputElements[i].value === '') {
      createButtonElement.disabled = true;
      error.innerHTML = "*Rellena todos los campos para continuar."
      error.classList.remove('errorHidden');
      error.classList.remove('hidden');
    } else {
      createButtonElement.disabled = false;
      error.classList.add('hidden');
      
    } 
  }
}



