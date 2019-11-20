'use strict';

//Desplegar ventana de compartir card

const getElement = document.querySelector('#create-button');
const shareCard =  document.querySelector("#share-card");

function removeClass () {
  shareCard.classList.remove('active-share');
}
getElement.addEventListener('click',removeClass);

//Cambiar flecha hacia abajo por flecha hacia arriba

  let arrow = document.querySelector('.arrow-button');
  let createButton = document.querySelector('.create-button');
  let shareButton = document.querySelector('.active-share');
  let shareSection = document.querySelector('.create__share');
function changeArrow () {
    
  /* event.currentTarget.classList.toggle('teacher--selected');*/
  event.currentTarget.classList.toggle('fa-chevron-up');
    const arrowActive = event.currentTarget;
    if (arrowActive.classList.contains('fa-chevron-down')) {
      arrowActive.classList.remove('fa-chevron-down');
      arrowActive.classList.add('fa-chevron-up');
      createButton.style.display = 'none';
      shareButton.style.display = 'none';
      shareSection.style.padding = '0 0 7px 0';

   /* } else if (arrowActive.classList.contains('fa-chevron-down') && createButton.style.display === none) {*/
      
  } else {
    arrowActive.classList.remove('fa-chevron-up');
    arrowActive.classList.add('fa-chevron-down');
    createButton.style.display = 'block';
      shareButton.style.display = 'default';
      shareSection.style.padding = '0 0 30px 0';
  }
}
arrow.addEventListener('click',changeArrow);






//FORMULARIO

const elementTitle = document.querySelector('#js-title');
const elementJob = document.querySelector('#js-job');
const elementEmail = document.querySelector('#js-email');
const elementMobile = document.querySelector('#js-mobile');
const elementLinkedin = document.querySelector('#js-linkedin');
const elementGithub = document.querySelector('#git');
const inputTitle = document.querySelector('#txtFullName');
const inputJob = document.querySelector('#txtJob');
const inputEmail = document.querySelector('#txtEmail');
const inputMobile = document.querySelector('#txtPhoneNumber');
const inputLinkedin = document.querySelector('#txtLinkedinUser');
const inputGithub = document.querySelector('#txtGithubUser');



const changeName = () => elementTitle.innerHTML = inputTitle.value;
const changeJob = () =>  elementJob.innerHTML = inputJob.value;
const addLinkedin = () => elementLinkedin.href = inputLinkedin.value;
const addGithub = () => elementGithub.href = inputGithub.value;
const addEmail = () => {
  elementEmail.href = `mailto: ${inputEmail.value}`;
  ValidateEmail()
  
}

checkEmail ()

function ValidateEmail() {
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value))
  {
    return (true)
  }
    alert("Tu email es incorrecto")
    return (false)
}



inputTitle.addEventListener('keyup', changeName);
inputJob.addEventListener('keypress', changeJob);
inputEmail.addEventListener('change', addEmail);
inputLinkedin.addEventListener('keyup', addLinkedin);
inputGithub.addEventListener('keyup', addGithub);

const checkEmail = () => {
  if (inputEmail.value = ""){
  elementEmail.classList.add('fill-empty');
  }
}
