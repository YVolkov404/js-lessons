console.log('--------------- Example 01 ---------------');

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

// ? naming subject listener events

function handleTargetBtnClick() {
  console.log('click');
}

function targetBtnClickHandler() {
  console.log('click');
}

// function onTargetBtnClick() {
//   console.log('click');
// }

function logMessage() {
  console.log('log-message');
}

console.log('--------------- Example 02 ---------------');

addListenerBtn.addEventListener('click', () => {
  console.log('add event on target btn');

  targetBtn.addEventListener('click', onTargetBtnClick); // callbak referential identity
});

removeListenerBtn.addEventListener('click', () => {
  targetBtn.removeEventListener('click', onTargetBtnClick); // callbak referential identity
});

function onTargetBtnClick(event) {
  console.log(event);
  console.log('click on event target btn');
}

console.log('--------------- Example 03 ---------------');

const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault(); // browser tab reload stopped

  console.dir(event.currentTarget.elements); // all form elements

  const formElements = event.currentTarget.elements;
  console.log(formElements);

  // const email = formElements.email.value;
  // const password = formElements.password.value;
  // const subscription = formElements.subscripion.value;

  // const formData = {
  //   email,
  //   password,
  //   subscription
  // }
  // console.log(formData);

  const formData = new FormData(event.currentTarget);
  console.log(formData);

  formData.forEach((value, name) => {
    console.log('value', value);
    console.log('name', name);
  });
}

console.log('--------------- Example 04 ---------------');

const myRefs = {
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button > span'),
  license: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
};

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);
// refs.input.addEventListener('change', onInputChange);
// refs.input.addEventListener('input', onLicenseChange);

myRefs.input.addEventListener('input', onInputChange);
myRefs.license.addEventListener('change', onLicenseChange);

function onInputFocus() {
  console.log('event focus'); // input received focus
}

function onInputBlur() {
  console.log('event blur'); // input lost blure
}

function onInputChange(event) {
  // console.log(event.currentTarget.value);

  myRefs.nameLabel.textContent = event.currentTarget.value;
}

function onLicenseChange(event) {
  console.log(event.currentTarget.checked);
  console.log(refs.btn.disabled);
  myRefs.btn.disabled = !event.currentTarget.checked;
}

console.log('--------------- Example 05 ---------------');

// const refs = {
//   output: document.querySelector('.js-output'),
//   clearBtn: document.querySelector('.js-clear'),
// };

// window.addEventListener('keydown', onKeypress);
// refs.clearBtn.addEventListener('click', onClearOutput);

// function onKeypress(event) {
//   console.log(event.key);
//   console.log(event.code);
//   refs.output.textContent += event.key;
// }

// function onClearOutput() {
//   refs.output.textContent = '';
// }

console.log('--------------- Example 06 ---------------');

const boxRef = document.querySelector('.js-box');

boxRef.addEventListener('mouseenter', onMouseEnter);
boxRef.addEventListener('mouseleave', onMouseLeave);
boxRef.addEventListener('mousemove', onMouseMove);

function onMouseEnter(event) {
  const box = event.currentTarget;
  box.classList.add('box-active');
}

function onMouseLeave(event) {
  const box = event.currentTarget;
  box.classList.remove('box-active');
}

function onMouseMove(event) {
  console.log(event);
}

console.log('--------------- Example 07 ---------------');

const refs = {
  openModalBtn: document.querySelector(`[data-action='open-modal']`),
  closeModalBtn: document.querySelector(`[data-action='close-modal']`),
  backdrop: document.querySelector('.js-backdrop'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);

  document.body.classList.add('show-modal');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);

  document.body.classList.remove('show-modal');
}

function onBackdropClick(event) {
  // console.log('click');
  // console.log(event.currentTarget);
  // console.log(event.target);

  if (event.currentTarget === event.target) {
    console.log('click on backdrop');
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';

  if (event.code === ESC_KEY_CODE) {
    onCloseModal();
  }
}
