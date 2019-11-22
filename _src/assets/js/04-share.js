/*if (camposValidos == false) {
  botonEnviar.disabled = true;
}
else {
  botonEnviar.disabled = false;
}*/
const inputElements = document.querySelectorAll('input');
const createButtonElement = document.getElementById('create-button');

function validateInputs() {
  for(let i = 0; i < inputElements.length; i++) {
    if (inputElements[i].value === '') {
      createButtonElement.disabled = true;
    } else {
      createButtonElement.disabled = false;
    }
  }
}








































validateInputs();