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
  } else if (elementHidden.classList.contains('hidden')===false) {
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
    arrowActiveForm.classList.add('fa-chevron-up');
    createFill.style.padding = '0 0 30px 0';
  } else if (form.classList.contains('hidden')===false) {
    form.classList.add('hidden');
    arrowActiveForm.classList.remove('fa-chevron-up');
    arrowActiveForm.classList.add('fa-chevron-down');
  }
}
headerForm.addEventListener('click', showNotshowForm);

//Desplegar share card
let createButton = document.querySelector('.create-button');
let shareButton = document.querySelector('.active-share');
let shareSection = document.querySelector('.create__share');
const createIntroElement = document.querySelector('.create-intro');
const arrowActiveShare = document.querySelector('.arrow-button-share');

  function showNotShow() {
    if (createButton.classList.contains('hidden')===true){
      createButton.classList.remove('hidden');
      arrowActiveShare.classList.remove('fa-chevron-down');
      arrowActiveShare.classList.add('fa-chevron-up');
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
