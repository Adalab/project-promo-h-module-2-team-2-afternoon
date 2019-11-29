//boton de reset

const resetButton = document.getElementById('reset');
function resetForm() {

  //resetear campos formulario 
  profileImage.src = './assets/images/girl.png';
  elementTitle.innerHTML = 'Nombre Apellidos';
  elementJob.innerHTML = 'Front end developer';
  elementLinkedin.href = '';
  elementMobile.href = '';
  elementGithub.href = '';
  elementEmail.href = '';
  //Esconder el share card al hacer reset y la opción de compartir en TW en caso de que se hubiera pintado:
  shareCardButton.classList.add('hidden');
  createButtonElement.disabled = true;
  createCardSection.classList.add('hidden');
  arrowActiveShare.classList.remove('fa-chevron-up');
  arrowActiveShare.classList.add('fa-chevron-down');

  //quitar opacidad iconos
  elementLinkedin.classList.add('hidden-icons');
  elementGithub.classList.add('hidden-icons'); 
  elementEmail.classList.add('hidden-icons'); 
  elementMobile.classList.add('hidden-icons'); 

  // Reset parte de Ana
  document.querySelector('.fill__form').reset();
  document.querySelector('.create__design--form').reset();
  if(previewElement.classList.contains('blue')) {
  } else if(previewElement.classList.contains('red')) {
    previewElement.classList.remove('red');
    previewElement.classList.add('blue');
  } else if(previewElement.classList.contains('yellow')) {
    previewElement.classList.remove('yellow');
    previewElement.classList.add('blue');
  }
}


resetButton.addEventListener('click', resetForm);


