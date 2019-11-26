'use strict';

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
  elementMobile.href = parseInt(inputMobile.value);
  ValidatePhone()
}
 


const checkEmail = () => {
  if (inputEmail.value = ""){
  elementEmail.classList.add('fill-empty');
  }
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

//Botón añadir imagen
const btnAddImage = document.getElementById('btnAddImage');

function manageAddImageButton(){
    const btnFileAddImage = document.getElementById('btnFileAddImage');
    btnFileAddImage.click();
};

btnAddImage.addEventListener('click', manageAddImageButton);
