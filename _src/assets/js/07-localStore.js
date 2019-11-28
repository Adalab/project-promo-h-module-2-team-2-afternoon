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



const setInput = () => {

    const data = {
    //   palette: 
      name: inputTitle.value,
      job: inputJob.value,
      email: inputEmail.value,
      mobile: inputMobile.value,
      linkedin: inputLinkedin.value,
      github: inputGithub.value,
    //   photo: srcPhoto
    };
  
    localStorage.setItem("userDataFrom", JSON.stringify(data));
  };

 const getLocalStorage = () => {
    const getData = JSON.parse(localStorage.getItem("userDataFrom"));
        if (getData) {
            inputTitle.value = getData.name;
            inputJob.value = getData.job;
            inputEmail.value = getData.email;
            inputMobile.value = getData.mobile;
            inputLinkedin.value = getData.linkedin;
            inputGithub.value = getData.github;
        }
        if (getData) {
            elementTitle.innerHTML = getData.name;
            elementJob.innerHTML = getData.job;
            elementEmail.href = `mailto:${getData.email}`;
            elementMobile.href = `tel:${getData.mobile}`;
            elementLinkedin.href = `https://linkedin.com/in/${getData.linkedin}`;
            elementGithub.href =  `https://github.com/${getData.github}`;
        }
}
        

window.addEventListener('keyup', setInput);
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

