import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');
const emailEl = formEl.querySelector('input');
const messageEl = formEl.querySelector('textarea');

const saveFormState = throttle(() => {
  const formState = {
    email: emailEl.value,
    message: messageEl.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}, 500);

formEl.addEventListener('input', saveFormState);
formEl.addEventListener('submit', event => {
  event.preventDefault()
  localStorage.removeItem('feedback-form-state')
  emailEl.value = ''
  messageEl.value = ''
});