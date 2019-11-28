'use strict'

const linkToTwitter = document.querySelector('.shareInTwitter');
let photoSend = '';

function getImageSrc(event){
  event.preventDefault();

  if (!fr.result && !localStorage.getItem('image')){
    photoSend = defaultImage;
  }

  else if (!fr.result && localStorage.getItem('image')){
    photoSend = localStorage.getItem('image');
  }
  else {
    photoSend = fr.result;
    localStorage.setItem('image',photoSend );
  }

  createShareCard();
}

function createShareCard() {
  const data = {
    "palette": getColor(),
    "name": inputTitle.value,
    "job": inputJob.value,
    "phone": inputMobile.value,
    "email": inputEmail.value,
    "linkedin": inputLinkedin.value,
    "github": inputGithub.value,
    "photo": photoSend //COMPROBAR
  }

  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    },
    mode: 'no-cors'
  }).then (response => response.json())
    .then (data => showURL(data))
    .catch (function(error) { console.log(error); });
  }


function showURL(data){
  if(data.success){
    linkShare.innerHTML = data.cardURL;
    linkShare.setAttribute('href', data.cardURL);
  }else{
    linkShare.innerHTML = 'ERROR:' + result.error;
  }
  shareTwitter(data.cardURL);
}

//

function shareTwitter(cardURL){
  const urlTwitter = encodeURIComponent('¡Acabo de crear esta tarjeta profesional con Awesome Profile Cards!');
  const hastag = encodeURIComponent('adalab,adalaber,frontend,development,profile');
  const finalURL = `https://twitter.com/intent/tweet?text=${urlTwitter}&url=${cardURL}&hashtags=${hastag}`;
  linkToTwit.href = finalURL;
}

createButtonElement.addEventListener('click', getImageSrc);

