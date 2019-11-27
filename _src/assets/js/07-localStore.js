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
    if (inputTitle.value !== '') {
        elementTitle.innerHTML = inputTitle.value;
        localStorage.setItem('name', inputTitle.value);
    }if (inputJob.value !== '' ) {
        elementJob.innerHTML = inputJob.value;
        localStorage.setItem('job', inputJob.value);
    }if (inputEmail.value !== ''){
        elementEmail.href = inputEmail.value;
        localStorage.setItem('email', `mailto:${inputEmail.value}`);
    }if (inputMobile.value !== '') {
        elementMobile.href = inputMobile.value; 
        localStorage.setItem('tel', `tel:${inputMobile.value}`);
    }if (inputLinkedin.value !== ''); {
        elementLinkedin.href = inputLinkedin.value;
        localStorage.setItem('linkedin', `https://linkedin.com/in/${inputLinkedin.value}`);
    }if (inputGithub.value !== ''){
        elementGithub.href = inputGithub.value;
        localStorage.setItem('github', `https://github.com/${inputGithub.value}`)
    }
}

const getInput = () => {
    
        elementTitle.innerHTML = localStorage.getItem('name', inputTitle.value);
        inputTitle.value = localStorage.getItem('name', inputTitle.value);
}

window.addEventListener('keyup', setInput);
window.addEventListener('load', getInput);

