'use strict'

const data = {
  "palette": colorsFormValue,
  "name": inputTitle.value,
  "job": inputJob.value,
  "phone": inputMobile.value,
  "email": inputEmail.value,
  "linkedin": inputLinkedin.value,
  "github": inputGithub.value,
  "photo": inputTitle.src, //COMPROBAR
}

fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'content-type': 'application/json'
  },
})  .then (response => response.json())
    .then (data => showURL(data))
    .catch (function(error) { console.log(error); });


function showURL(data){
  if(data.success){
    linkShare.innerHTML = data.cardURL;
    linkShare.setAttribute('href', data.cardURL);
  }else{
    linkShare.innerHTML = 'ERROR:' + result.error;
  }
}
















/*function showURL(data){

  if (data.success){
    urlShare.innerHTML = '<a class="twitter-url" href=' + data.cardURL + ' target="_blank">' + data.cardURL + '</a>';
  }
  else {
    urlShare.innerHTML = 'ERROR:' + data.error;
  }
}*/
