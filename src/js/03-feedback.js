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
  if (textareaEl.value === '' || inputEl.value === '') {
    return;
  }
  e.currentTarget.reset();
  localStorage.removeItem(KEY);
}

function onInput(e) {
  formData.email = inputEl.value.trim();
  formData.message = textareaEl.value.trim();

  return localStorage.setItem(KEY, JSON.stringify(formData));
}

function formInput() {
  const data = JSON.parse(localStorage.getItem(KEY));
  if (data) {
    (inputEl.value = data.email || ''),
      (textareaEl.value = data.message || '');
  }
  return data;
}

// // Зберігаємо дані у локальне сховище з затримкою
// const saveFormState = throttle(() => {
//   const formState = {
//     email: emailEl.value,
//     message: messageEl.value,
//   };
//   localStorage.setItem('feedback-form-state', JSON.stringify(formState));
// }, 500);

// // Відстежуємо подію input на полях форми
// formEl.addEventListener('input', saveFormState);

// // Заповнюємо поля форми при завантаженні сторінки
// window.addEventListener('load', () => {
//   const formState = JSON.parse(localStorage.getItem('feedback-form-state'));
//   if (formState) {
//     emailEl.value = formState.email;
//     messageEl.value = formState.message;
//   }
// });

// // Очищуємо форму та сховище при сабміті
// formEl.addEventListener('submit', event => {
//   event.preventDefault();
//   localStorage.removeItem('feedback-form-state');
//   emailEl.value = '';
//   messageEl.value = '';
// });

