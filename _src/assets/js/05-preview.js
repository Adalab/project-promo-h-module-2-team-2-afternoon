//boton de reset

const resetButton = document.getElementById('reset');
function resetForm() {
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


const elementEmail = document.querySelector('#js-email');
const elementMobile = document.querySelector('#js-mobile');
const elementLinkedin = document.querySelector('#js-linkedin');
const elementGithub = document.querySelector('#git');
const inputEmail = document.querySelector('#txtEmail');
const inputMobile = document.querySelector('#txtPhoneNumber');
const inputLinkedin = document.querySelector('#txtLinkedinUser');
const inputGithub = document.querySelector('#txtGithubUser');

function addIcons (){
  elementEmail.classList.add('hidden-icons');
}