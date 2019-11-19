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


//Cambiar colores en preview
const name = document.querySelector('.preview__content__title');
const contentBorder = document.querySelector('.preview__content');
const iconOne = document.querySelector('.icon--1');
const iconTwo = document.querySelector('.icon--2');
const iconThree = document.querySelector('.icon--3');
const iconFour = document.querySelector('.icon--4');
//const icons = document.querySelectorAll('.icon--4' + '.icon--3');
//First color option
const firstColors = document.getElementById('color-one-selected');

function changeColorOne() {
  //for (var i=0; i<icons.length; i++) {
    // Ejecutar acciones sobre el nodo listaNodosOperadores[i].

  //nombre y apellidos
  name.style.color = '$darkblue';
  //borde nombre y apellidos
  contentBorder.style.borderColor = '$dirtyblue';
  //iconos
  iconOne.style.color = '$darkblue';
  iconTwo.style.color = '$darkblue';
  iconThree.style.color = '$darkblue';
  iconFour.style.color = '$darkblue';
  /*icons.style.color = '#fff';*/
  //borde iconos
  iconOne.style.borderColor = '$hospitalgreen';
  iconTwo.style.borderColor = '$hospitalgreen';
  iconThree.style.borderColor = '$hospitalgreen';
  iconFour.style.borderColor = '$hospitalgreen';
  
}

firstColors.addEventListener('click', changeColorOne);

//second color option 
const secondColors = document.getElementById('color-two-selected');

function changeColorTwo() {
  //nombre y apellidos
  name.style.color = '$driedBlood';
  //borde nombre y apellidos
  contentBorder.style.borderColor = '$rustyRed';
  //iconos
  iconOne.style.color = '$driedBlood';
  iconTwo.style.color = '$driedBlood';
  iconThree.style.color = '$driedBlood';
  iconFour.style.color = '$driedBlood';
  //borde iconos
  iconOne.style.borderColor = '$tomato';
  iconTwo.style.borderColor = '$tomato';
  iconThree.style.borderColor = '$tomato';
  iconFour.style.borderColor = '$tomato';
}

secondColors.addEventListener('click', changeColorTwo);

//third color option 
const thirdColors = document.getElementById('color-three-selected');

function changeColorThree() {
  //nombre y apellidos
  name.style.color = '$slateBlue';
  //borde nombre y apellidos
  contentBorder.style.borderColor = '$fadedOrange';
  //iconos
  iconOne.style.color = '$slateBlue';
  iconTwo.style.color = '$slateBlue';
  iconThree.style.color = '$slateBlue';
  iconFour.style.color = '$slateBlue';
  //borde iconos
  iconOne.style.borderColor = '$lightGreyBlue';
  iconTwo.style.borderColor = '$lightGreyBlue';
  iconThree.style.borderColor = '$lightGreyBlue';
  iconFour.style.borderColor = '$lightGreyBlue';
}

thirdColors.addEventListener('click', changeColorThree);