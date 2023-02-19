import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = formEl.querySelector('input');
const messageEl = formEl.querySelector('textarea');

const KEY = 'feedback-form-state';
const formData = {};
formEl.addEventListener('submit', formSubmit);
formEl.addEventListener('input', throttle(onInput, 500));
formInput();

function formSubmit(e) {
  e.preventDefault();
  if (messageEl.value === '' || emailEl.value === '') {
    return;
  }
  e.currentTarget.reset();
  localStorage.removeItem(KEY);
}

function onInput(e) {
  formData.email = emailEl.value.trim();
  formData.message = messageEl.value.trim();

  return localStorage.setItem(KEY, JSON.stringify(formData));
}

function formInput() {
  const data = JSON.parse(localStorage.getItem(KEY));
  if (data) {
    (emailEl.value = data.email || ''),
      (messageEl.value = data.message || '');
  }
  return data;
}
window.addEventListener('load', () => {
      const formState = JSON.parse(localStorage.getItem(KEY));
      if (formState) {
        emailEl.value = formState.email;
        messageEl.value = formState.message;
      }
    });
    