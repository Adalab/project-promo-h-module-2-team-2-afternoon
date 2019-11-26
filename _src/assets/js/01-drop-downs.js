'use strict';

// TOOGLE PALETA COLORES 
const designArrowButton = document.querySelector('.design-arrow-button');
const div = document.querySelector('#js-toggle');
const elementHidden = document.querySelector('#toggle');

function hideNotDesignElements () {
  form.classList.add('hidden');
  arrowActiveForm.classList.remove('fa-chevron-up');
  arrowActiveForm.classList.add('fa-chevron-down');
  createCardSection.classList.add('hidden');
  arrowActiveShare.classList.remove('fa-chevron-up');
  arrowActiveShare.classList.add('fa-chevron-down');
  shareCardButton.classList.add('hidden')
}

function toggle () {
  hideNotDesignElements ()
  if (elementHidden.classList.contains('hidden')) {
    elementHidden.classList.remove('hidden');
    designArrowButton.classList.remove('fa-chevron-down');
    designArrowButton.classList.add('fa-chevron-up');
  } else {
    elementHidden.classList.add('hidden'); 
    designArrowButton.classList.remove('fa-chevron-up');
    designArrowButton.classList.add('fa-chevron-down');
  }
}

div.addEventListener('click', toggle);

//Desplegar formulario
const arrowActiveForm = document.querySelector('.arrow-button-form');
const form = document.querySelector('.fill__form')
const headerForm = document.querySelector('.fill__header-container')
const createFill = document.querySelector('.create__fill');

function hideNotFormElements () {
  elementHidden.classList.add('hidden');
  designArrowButton.classList.remove('fa-chevron-up');
  designArrowButton.classList.add('fa-chevron-down');
  createCardSection.classList.add('hidden');
  arrowActiveShare.classList.remove('fa-chevron-up');
  arrowActiveShare.classList.add('fa-chevron-down');
  shareCardButton.classList.add('hidden')
}

function showOrHideForm () {
  hideNotFormElements()
  if (form.classList.contains('hidden')) {
    form.classList.remove('hidden');
    arrowActiveForm.classList.remove('fa-chevron-down');
    arrowActiveForm.classList.add('fa-chevron-up');
    createFill.style.padding = '0 0 30px 0';
  } else {
    form.classList.add('hidden');
    arrowActiveForm.classList.remove('fa-chevron-up');
    arrowActiveForm.classList.add('fa-chevron-down');
  }
}

headerForm.addEventListener('click', showOrHideForm);

//Desplegar share card
const createButton = document.querySelector('.create-button');
const shareSection = document.querySelector('.create__share');
const createIntroElement = document.querySelector('.create-intro');
const arrowActiveShare = document.querySelector('.arrow-button-share');
const createCardButton = document.querySelector('#create-button');
const createCardSection = document.querySelector('#create-button-section');
const shareCardButton =  document.querySelector("#share-card");
const validateInputsSection = document.querySelector(".validateInputsSection");

function hiddeNotShareElements() {
  form.classList.add('hidden');
  designArrowButton.classList.remove('fa-chevron-up');
  designArrowButton.classList.add('fa-chevron-down');
  elementHidden.classList.add('hidden');
  arrowActiveForm.classList.remove('fa-chevron-up');
  arrowActiveForm.classList.add('fa-chevron-down');
}

function showOrHideShare() {
  hiddeNotShareElements();
  if (createCardSection.classList.contains('hidden')){
    createCardSection.classList.remove('hidden');
    arrowActiveShare.classList.remove('fa-chevron-down');
    arrowActiveShare.classList.add('fa-chevron-up');
  } else {
    createCardSection.classList.add('hidden');
    arrowActiveShare.classList.remove('fa-chevron-up');
    arrowActiveShare.classList.add('fa-chevron-down');
    shareCardButton.classList.add('hidden');
  }
  validateInputs(); 
}

createIntroElement.addEventListener('click', showOrHideShare);

//Desplegar ventana de compartir card
function removeClass () {
  shareCardButton.classList.remove('hidden');
}

createCardButton.addEventListener('click',removeClass);
