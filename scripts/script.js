const signUpPage = document.getElementById('sign-up');
const mainFormElement = document.getElementById('main-form');
const errorMessageElement = document.getElementById('error-message');
const emailImputElement = document.getElementById('email');
const successMessageElement = document.getElementById('success-message');
const submittedEmailElement = document.getElementById('submitted-email');
const dismissButtonElement = document.getElementById('dismiss-button');

const validEmailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

mainFormElement.addEventListener('submit', (e) => {
  e.preventDefault();
  if(!emailImputElement.value.match(validEmailFormat)){
    errorMessageElement.classList.remove('hidden');
    emailImputElement.style.borderColor = 'hsl(13, 99%, 62%)';
    emailImputElement.style.color = 'hsl(13, 99%, 62%)';
    emailImputElement.style.backgroundColor = 'hsl(14, 80%, 90%)';
    emailImputElement.style.outlineColor = 'hsl(13, 99%, 62%)';
  }else{
    errorMessageElement.classList.toggle('hidden');
    signUpPage.classList.toggle('hidden');
    emailImputElement.style.borderColor = 'hsl(231, 7%, 60%)';
    emailImputElement.style.color = 'hsl(234, 29%, 20%)';
    emailImputElement.style.backgroundColor = 'white';
    emailImputElement.style.outlineColor = 'hsl(231, 7%, 60%)';

    submittedEmailElement.innerHTML = emailImputElement.value;
    successMessageElement.classList.remove('hidden');
  }
});

dismissButtonElement.addEventListener('click', () =>{
  emailImputElement.value = '';
  successMessageElement.classList.add('hidden');
  signUpPage.classList.remove('hidden');
  errorMessageElement.classList.add('hidden');
});