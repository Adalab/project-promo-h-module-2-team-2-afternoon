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





// TOOGLE PALETA COLORES - falta
const div =  document.querySelector("#js-toogle");
const elementHidden = document.querySelector('#toogle');


function toogle () {
  if (elementHidden.classList.contains('hidden')) {
    elementHidden.classList.remove('hidden'); 
  }
}
div.addEventListener('click', toogle);

