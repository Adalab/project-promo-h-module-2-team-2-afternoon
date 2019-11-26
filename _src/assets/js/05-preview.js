//boton de reset

const resetButton = document.getElementById('reset');
function resetForm() {
  //Esconder el share card al hacer reset y la opción de compartir en TW en caso de que se hubiera pintado:
  shareCardButton.classList.add('hidden');
  createButtonElement.disabled = true;
  createCardSection.classList.add('hidden');
  arrowActiveShare.classList.remove('fa-chevron-up');
  arrowActiveShare.classList.add('fa-chevron-down');

  // Reset parte de Ana
  document.querySelector('.fill__form').reset();
  document.querySelector('.create__design--form').reset();
  if(previewElement.classList.contains('blue')) {
    return resetText();
  } else if(previewElement.classList.contains('red')) {
    previewElement.classList.remove('red');
    previewElement.classList.add('blue');
  } else if(previewElement.classList.contains('yellow')) {
    previewElement.classList.remove('yellow');
    previewElement.classList.add('blue');
  }
}
const resetText = () => {
  elementTitle.innerHTML = 'Nombre Apellidos';
  elementJob.innerHTML = 'Front end developer';
  elementLinkedin.href = '';
  elementMobile.href = '';
  elementGithub.href = '';
  elementEmail.href = '';
}

inputTitle.addEventListener('keyup', changeName);
inputJob.addEventListener('keypress', changeJob);
inputEmail.addEventListener('change', addEmail);
inputLinkedin.addEventListener('keyup', addLinkedin);
inputGithub.addEventListener('keyup', addGithub);
inputMobile.addEventListener('keyup', addPhone);

resetButton.addEventListener('click', resetForm);