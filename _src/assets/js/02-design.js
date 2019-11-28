'use strict';



//Cambiar colores preview
const name = document.querySelector('.preview__content__title');
const contentBorder = document.querySelector('.preview__content');
const previewElement = document.querySelector('.preview');
const firstColors = document.getElementById('color-one-selected');
const thirdColors = document.getElementById('color-three-selected');
const secondColors = document.getElementById('color-two-selected');

const colorOne = document.querySelector('.color__one')
const colorTwo = document.querySelector('.color__two')
const colorThree = document.querySelector('.color__three')

const colorsForm = document.querySelector('.create__design--form');
let radioColor = 1;

function selectColor (event) {
  if(colorOne.checked) {
    previewElement.classList.add('blue');
    previewElement.classList.remove('yellow');
    previewElement.classList.remove('red');
    radioColor = event.target.value
    console.log(radioColor)

  }

  if(colorTwo.checked) {
    previewElement.classList.add('red');
    previewElement.classList.remove('blue');
    previewElement.classList.remove('yellow');
    radioColor = event.target.value
    console.log(radioColor)
  }

  if(colorThree.checked) {
    previewElement.classList.add('yellow');
    previewElement.classList.remove('red');
    previewElement.classList.remove('blue');
    radioColor = event.target.value
    console.log(radioColor)
  }
}

colorsForm.addEventListener('change', selectColor);

let getColor = () => {
  let selectedCheckbox = colorsForm.querySelector('input[checked]');

  return selectedCheckbox.value;
  
}



form.addEventListener('change', getColor);