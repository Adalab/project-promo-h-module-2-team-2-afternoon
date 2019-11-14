'use strict';

const getElement = document.querySelector('#create-button');
const shareCard =  document.querySelector("#share-card");

function removeClass () {
  shareCard.classList.remove('active-share');
  //console.log('hola');
}

getElement.addEventListener('click',removeClass);
