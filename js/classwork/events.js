console.log("----------------- Example-01 -----------------");

const targetBtn = document.querySelector(".js-target-btn");
const addListenerBtn = document.querySelector(".js-add-listener");
const removeListenerBtn = document.querySelector(".js-remove-listener");

targetBtn.addEventListener("click", onTargetButtonClick);

function logMessage() {
  console.log("Click on target button");
}

function handleTargetButtonClick() {
  console.log("Click");
}

function targetButtonClickHandler() {
  console.log("Click");
}

function onTargetButtonClick() {
  console.log("Click");
}

console.log("----------------- Example-02 -----------------");

addListenerBtn.addEventListener("click", (event) => {
  console.log("Click on target button");

  targetBtn.addEventListener("click", onTargetBtnClick);
});

removeListenerBtn.addEventListener('click', (event) => {
    console.log("Remove listener");

    targetBtn.removeEventListener('click', onTargetBtnClick);
})

function onTargetBtnClick (event) {
    console.log('Click on target button');
}

console.log("----------------- Example-03 -----------------");

const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit)

// function onFormSubmit (event) {
//   event.preventDefault();
//   const formElements = event.currentTarget.elements;
//   console.dir(formElements)
//   const email = formElements.email.value;
//   const password = formElements.password.value;
//   const subscription = formElements.subscription.value;
//   const formData = {
//     email,
//     password,
//     subscription
//   }
//   console.log(formData);
// }

function onFormSubmit (event) {
  event.preventDefault();
  
  const formData = new FormData (event.currentTarget);

  console.log(formData);

  formData.forEach((value, name) => {
    console.log(value);
    console.log(name);
  })
}