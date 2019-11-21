'use strict';

//Cambiar colores preview
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
