let selectedCheckbox = colorsForm.querySelector('input[checked]');

const saveLocalStorage = () => {
  if(colorOne.checked) {
    radioColor = 1;
  }

  if(colorTwo.checked) {
    radioColor = 2;
  }

  if(colorThree.checked) {
    radioColor = 3;
  }

  const data = {
    palette: radioColor,
    name: inputTitle.value,
    job: inputJob.value,
    email: inputEmail.value,
    mobile: inputMobile.value,
    linkedin: inputLinkedin.value,
    github: inputGithub.value,
    photo: profileImage.src,
    //iconPhoto:
  };
  
  localStorage.setItem("userDataFrom", JSON.stringify(data));
};

 const getLocalStorage = () => {
    const getData = JSON.parse(localStorage.getItem("userDataFrom"));

    if (getData) {
      const radioColorGet = getData.palette;
      colorOne.checked = radioColorGet === 1;
      colorTwo.checked = radioColorGet === 2;
      colorThree.checked = radioColorGet === 3;
      selectColor(radioColorGet);

      inputTitle.value = getData.name;
      inputJob.value = getData.job;
      inputEmail.value = getData.email;
      inputMobile.value = getData.mobile;
      inputLinkedin.value = getData.linkedin;
      inputGithub.value = getData.github;

      elementTitle.innerHTML = getData.name;
      elementJob.innerHTML = getData.job;
      elementEmail.href = `mailto:${getData.email}`;
      elementMobile.href = `tel:${getData.mobile}`;
      elementLinkedin.href = `https://linkedin.com/in/${getData.linkedin}`;
      elementGithub.href =  `https://github.com/${getData.github}`;

      profileImage.src = getData.photo;

      //validación de los inputs en el localstore-load
      if(inputMobile.value !== ''){
        addPhoneValidator();
      }

      if(inputEmail.value !== ''){
        addAlertValidator();
      }

       //mantener opacidad si hay algo en los iconos

      if(inputLinkedin.value !== '') {
        elementLinkedin.classList.remove('hidden-icons');
      } else {
        elementLinkedin.classList.add('hidden-icons'); 
      }

      if(inputGithub.value !== '') {
        elementGithub.classList.remove('hidden-icons');
      } 
      if(inputMobile.value !== '') {
        elementMobile.classList.remove('hidden-icons');
      }
      if(inputEmail.value !== '') {
        elementEmail.classList.remove('hidden-icons');
      } 
    }
}

window.addEventListener('keyup', saveLocalStorage);
window.addEventListener('load', getLocalStorage);

