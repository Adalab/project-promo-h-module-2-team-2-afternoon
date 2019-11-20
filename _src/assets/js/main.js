'use strict';

// TOOGLE PALETA COLORES 
const arrowActive = document.querySelector('.arrow-button');
const div =  document.querySelector("#js-toogle");
const elementHidden = document.querySelector('#toogle');

function toogle () {
  if (elementHidden.classList.contains('hidden')) {
    elementHidden.classList.remove('hidden');
    arrowActive.classList.remove('fa-chevron-down');
    arrowActive.classList.add('fa-chevron-up');
    form.classList.add('hidden');
    createButton.classList.add('hidden');
  } else {
    elementHidden.classList.add('hidden'); 
    arrowActive.classList.remove('fa-chevron-up');
    arrowActive.classList.add('fa-chevron-down');
  }
}
div.addEventListener('click', toogle);

//Desplegar formulario
const arrowActiveForm = document.querySelector('.arrow-button-form');
const form = document.querySelector('.fill__form')
const headerForm = document.querySelector('.fill__header-container')
const createFill = document.querySelector('.create__fill');

function showNotshowForm () {
  if (form.classList.contains('hidden')) {
    form.classList.remove('hidden');
    arrowActiveForm.classList.remove('fa-chevron-down');
    arrowActiveForm.classList.add('arrow-button-rotate ');
    createFill.style.padding = '0 0 30px 0';
    elementHidden.classList.add('hidden');
  createButton.classList.add('hidden');
  } else {
    form.classList.add('hidden');
    arrowActiveForm.classList.remove('fa-chevron-up');
    arrowActiveForm.classList.add('fa-chevron-down');
  }
}
function hiddeOthersElements () {
  elementHidden.classList.add('hidden');
  createButton.classList.add('hidden');
}

headerForm.addEventListener('click', showNotshowForm);
headerForm.addEventListener('click', hiddeOthersElements);

//Desplegar share card
let createButton = document.querySelector('.create-button');
let shareButton = document.querySelector('.active-share');
let shareSection = document.querySelector('.create__share');
const createIntroElement = document.querySelector('.create-intro');
const arrowActiveShare = document.querySelector('.arrow-button-share');

  function showNotShow() {
    if (createButton.classList.contains('hidden')){
      createButton.classList.remove('hidden');
      arrowActiveShare.classList.remove('fa-chevron-down');
      arrowActiveShare.classList.add('fa-chevron-up');
      form.classList.add('hidden');
      elementHidden.classList.add('hidden');
    } else {
      createButton.classList.add('hidden');
      arrowActiveShare.classList.remove('fa-chevron-up');
      arrowActiveShare.classList.add('fa-chevron-down');
    }
  }
  createIntroElement.addEventListener('click',showNotShow);

//Desplegar ventana de compartir card
const getElement = document.querySelector('#create-button');
const shareCard =  document.querySelector("#share-card");

function removeClass () {
  shareCard.classList.remove('active-share');
}
getElement.addEventListener('click',removeClass);

//cambiar colores preview

const name = document.querySelector('.preview__content__title');
const contentBorder = document.querySelector('.preview__content');
const previewElement = document.querySelector('.preview');
const firstColors = document.getElementById('color-one-selected');

function changeColorOne () {
  if(previewElement.classList.contains('red')) {
    previewElement.classList.remove('red');
    previewElement.classList.add('blue');
  } else if(previewElement.classList.contains('yellow')) {
    previewElement.classList.remove('yellow');
    previewElement.classList.add('blue');
  }
}

firstColors.addEventListener('click', changeColorOne)

function showNotshowForm () {
  if (form.classList.contains('hidden')) {
    form.classList.remove('hidden');
    arrowActiveForm.classList.remove('fa-chevron-down');
    arrowActiveForm.classList.add('fa-chevron-up');
    createFill.style.padding = '0 0 30px 0';
  } else {
    form.classList.add('hidden');
    arrowActiveForm.classList.remove('fa-chevron-up');
    arrowActiveForm.classList.add('fa-chevron-down');
  }
}
headerForm.addEventListener('click', showNotshowForm);

const secondColors = document.getElementById('color-two-selected');

function changeColorTwo () {
  if(previewElement.classList.contains('blue')) {
    previewElement.classList.remove('blue');
    previewElement.classList.add('red');
  } else if(previewElement.classList.contains('yellow')) {
    previewElement.classList.remove('yellow');
    previewElement.classList.add('red');
  }
}

secondColors.addEventListener('click', changeColorTwo)

const thirdColors = document.getElementById('color-three-selected');


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
const addPhone = () => {
  elementMobile.href = `+34 ${parseInt(inputMobile.value)}`;
  ValidatePhone ()
}

// const checkEmail = () => {
//   const iconEmail = document.querySelector('.icon--1');
//   const iconGit = document.querySelector('.icon--4');
//   if (elementGithub.href === ""){
//   iconGit.classList.toogle('fill-empty');
//   }
// }

checkEmail()

function ValidateEmail() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value)) {
     return (true)
   }
     alert("Tu email es incorrecto")
     return (false)
 }

function ValidatePhone () {
  if (/^[\s\S]{0,9}$/.test(inputMobile.value)) {
    return (true)
  }
  alert("Tu teléfono es incorrecto")
     return (false)
}



function changeColorThree () {
  if(previewElement.classList.contains('blue')) {
    previewElement.classList.remove('blue');
    previewElement.classList.add('yellow');
  } else if(previewElement.classList.contains('red')) {
    previewElement.classList.remove('red');
    previewElement.classList.add('yellow');
  }
}

thirdColors.addEventListener('click', changeColorThree);

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
inputMobile.addEventListener('keypress', addPhone);


resetButton.addEventListener('click', resetForm);

//Botón añadir imagen
const btnAddImage = document.getElementById('btnAddImage');

function manageAddImageButton(){
    const btnFileAddImage = document.getElementById('btnFileAddImage');
    btnFileAddImage.click();
};

btnAddImage.addEventListener('click', manageAddImageButton);
