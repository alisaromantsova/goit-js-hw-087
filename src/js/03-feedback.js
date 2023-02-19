const throttle = require('lodash.throttle');

const email = document.querySelector('input');
const message = document.querySelector('textarea');
const submitBtn = document.querySelector('button');

const obj = {
  email: '',
  message: '',
};

const inputEmail = e => {
  obj.email = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(obj));
};
const inputMessage = e => {
  obj.message = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(obj));
};

email.addEventListener('input', throttle(inputEmail, 500));
message.addEventListener('input', throttle(inputMessage, 500));

const onLoad = () => {
  const inf = localStorage.getItem('feedback-form-state');
  if (!inf) {
    return;
  }
  const newObj = JSON.parse(inf);
  email.value = newObj.email;
  obj.email = newObj.email;

  message.value = newObj.message;
  obj.message = newObj.message;
};
onLoad();

const onSubmitBtn = e => {
  e.preventDefault();
  console.log(obj);
  obj.email = '';
  obj.message = '';
  email.value = '';
  message.value = '';
  localStorage.removeItem('feedback-form-state');
};
submitBtn.addEventListener('click', onSubmitBtn);
