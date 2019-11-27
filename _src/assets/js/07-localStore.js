const elementTitle = document.querySelector('#js-title');
const elementJob = document.querySelector('#js-job');
const elementEmail = document.querySelector('#js-email');
const elementMobile = document.querySelector('#js-mobile');
const elementLinkedin = document.querySelector('#js-linkedin');
const elementGithub = document.querySelector('#git');
const inputTitle = document.querySelector('#txtFullName');
const inputJob = document.querySelector('#txtJob');
const inputEmail = document.querySelector('#txtEmail');
const inputMobile = document.querySelector('#txtPhoneNumber');
const inputLinkedin = document.querySelector('#txtLinkedinUser');
const inputGithub = document.querySelector('#txtGithubUser');

const getInput = () => {
    if (inputTitle.value !== '') {
        elementTitle.innerHTML = localStorage.getItem('name');
        inputTitle.value = localStorage.getItem('name');
    } else if (inputJob.value !== '' ) {
        elementJob.innerHTML = localStorage.getItem('job');
        inputJob.value = localStorage.getItem('job');
    }
}

window.addEventListener('load', getInput);