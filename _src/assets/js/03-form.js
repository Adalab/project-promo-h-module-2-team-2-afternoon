




















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
const addLinkedin = () => {
  elementLinkedin.classList.toggle('hidden-icons');
  elementLinkedin.href = `https://linkedin.com/in/${inputLinkedin.value}`;
}
const addGithub = () => {
  elementGithub.classList.toggle('hidden-icons');
  elementGithub.href = `https://github.com/${inputGithub.value}`;
}
const addEmail = () => {
  elementEmail.href = `mailto: ${inputEmail.value}`;
  elementEmail.classList.toggle('hidden-icons');

  ValidateEmail()
}

const addPhone = () => {
  elementMobile.href = `tel: ${parseInt(inputMobile.value)}`;
  elementMobile.classList.toggle('hidden-icons');
  ValidatePhone()
}


function ValidateEmail() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value))
   {
     return (true)
   }
     addAlertValidator()
     return (false)
}

function ValidatePhone () {
  if (/^[\s\S]{0,9}$/.test(inputMobile.value)) 
    {
      return (true)
    }
      addPhoneValidator ()
      return (false)
}

const addAlertValidator = () =>{
  const spanElement = document.createElement('span');
  spanElement.innerHTML = '*El e-mail que has introducido es incorrecto';
  const fatherDiv = document.querySelector('.fill__form--container');
  fatherDiv.appendChild(spanElement);

}

const addPhonetValidator = () =>{
  const spanElement = document.createElement('span');
  spanElement.innerHTML = '*El teléfono que has introducido es incorrecto';
  const fatherDiv = document.querySelector('.fill__form--wrapper');
  fatherDiv.appendChild(spanElement);

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
const fr = new FileReader();
const btnAddImage = document.getElementById('btnAddImage');
const btnFileAddImage = document.getElementById('btnFileAddImage');
const profileImage = document.querySelector('.preview__image');
const profilePreview = document.querySelector('.fill__image-preview');


function writeImage() {
  profileImage.src = fr.result;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
};

function getImage(e){
  let myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
};
  
function manageAddImageButton(){
  btnFileAddImage.click(); 
};

btnAddImage.addEventListener('click', manageAddImageButton);
btnFileAddImage.addEventListener('change', getImage);


inputTitle.addEventListener('keyup', changeName);
inputJob.addEventListener('keypress', changeJob);
inputEmail.addEventListener('change', addEmail);
inputLinkedin.addEventListener('change', addLinkedin);
inputGithub.addEventListener('change', addGithub);
inputMobile.addEventListener('change', addPhone);

