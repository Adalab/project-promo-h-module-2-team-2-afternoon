// const elementTitle = document.querySelector('#js-title');
// const elementJob = document.querySelector('#js-job');
// const elementEmail = document.querySelector('#js-email');
// const elementMobile = document.querySelector('#js-mobile');
// const elementLinkedin = document.querySelector('#js-linkedin');
// const elementGithub = document.querySelector('#git');
// const inputTitle = document.querySelector('#txtFullName');
// const inputJob = document.querySelector('#txtJob');
// const inputEmail = document.querySelector('#txtEmail');
// const inputMobile = document.querySelector('#txtPhoneNumber');
// const inputLinkedin = document.querySelector('#txtLinkedinUser');
// const inputGithub = document.querySelector('#txtGithubUser');
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








// const setInput = () => {
//     if (inputTitle.value !== '') {
//         elementTitle.innerHTML = inputTitle.value;
//         localStorage.setItem('name', inputTitle.value);
//     }if (inputJob.value !== '' ) {
//         elementJob.innerHTML = inputJob.value;
//         localStorage.setItem('job', inputJob.value);
//     }if (inputEmail.value !== ''){
//         elementEmail.href = inputEmail.value;
//         localStorage.setItem('email', `mailto:${inputEmail.value}`);
//     }if (inputMobile.value !== '') {
//         elementMobile.href = inputMobile.value; 
//         localStorage.setItem( `tel:${inputMobile.value}`);
//     }if (inputLinkedin.value !== ''); {
//         elementLinkedin.href = inputLinkedin.value;
//         localStorage.setItem('linkedin', `https://linkedin.com/in/${inputLinkedin.value}`);
//     }if (inputGithub.value !== ''){
//         elementGithub.href = inputGithub.value;
//         localStorage.setItem('github', `https://github.com/${inputGithub.value}`)
//     }
// }

// const getInput = () => {
    
//         elementTitle.innerHTML = localStorage.getItem('name', inputTitle.value);
//         inputTitle.value = localStorage.getItem('name', inputTitle.value);
//         elementTitle.innerHTML = localStorage.getItem('name', inputTitle.value);
//         inputTitle.value = localStorage.getItem('name', inputTitle.value);
//         elementJob.innerHTML = localStorage.getItem('job', inputJob.value);
//         inputJob.value = localStorage.getItem('job', inputJob.value);
//         elementEmail.href = localStorage.getItem('email', `mailto:${inputEmail.value}`);
//         inputEmail.value = localStorage.getItem('email', inputEmail.value);
//         elementMobile.href = localStorage.getItem('tel', inputMobile.value);
//         inputMobile.value = localStorage.getItem('tel', inputMobile.value)
//         elementLinkedin.href = localStorage.getItem('linkedin', `https://linkedin.com/in/${inputLinkedin.value}`);
//         elementLinkedin.value = localStorage.getItem('linkedin', inputLinkedin.value);
//         elementGithub.href = localStorage.getItem('github', `https://github.com/${inputGithub.value}`);
//         inputGithub.value = localStorage.getItem('github', inputGithub.value);
// }

// window.addEventListener('keyup', setInput);
// window.addEventListener('load', getInput);

