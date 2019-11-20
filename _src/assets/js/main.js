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
    return;
  } else if(previewElement.classList.contains('red')) {
    previewElement.classList.remove('red');
    previewElement.classList.add('blue');
  } else if(previewElement.classList.contains('yellow')) {
    previewElement.classList.remove('yellow');
    previewElement.classList.add('blue');
  }
}
resetButton.addEventListener('click', resetForm);

//Botón añadir imagen
const btnAddImage = document.getElementById('btnAddImage');

function manageAddImageButton(){
    const btnFileAddImage = document.getElementById('btnFileAddImage');
    btnFileAddImage.click();
};

btnAddImage.addEventListener('click', manageAddImageButton);