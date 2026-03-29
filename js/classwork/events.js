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

removeListenerBtn.addEventListener("click", (event) => {
  console.log("Remove listener");

  targetBtn.removeEventListener("click", onTargetBtnClick);
});

function onTargetBtnClick(event) {
  console.log("Click on target button");
}

console.log("----------------- Example-03 -----------------");

const form = document.querySelector(".js-register-form");

form.addEventListener("submit", onFormSubmit);

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

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  console.log(formData);

  formData.forEach((value, name) => {
    console.log(value);
    console.log(name);
  });
}

console.log("----------------- Example-04 -----------------");

const refs = {
  input: document.querySelector(".js-input"),
  nameLabel: document.querySelector(".js-button > span"),
  license: document.querySelector(".js-license"),
  btn: document.querySelector(".js-button"),
};

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlure);
// refs.input.addEventListener('change', onInputChange);
refs.input.addEventListener("input", onInputChange);
refs.license.addEventListener("change", onLicenseChange);

function onInputFocus() {
  console.log(Focus);
}

function onInputBlure() {
  console.log(Blur);
}

function onInputChange(event) {
  refs.nameLabel.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    refs.nameLabel.textContent = "Anonymous";
  }
}

function onLicenseChange(event) {
  event.currentTarget.checked;
  refs.btn.disabled = !event.currentTarget.checked;
}

console.log("----------------- Example-05 -----------------");

const refers = {
  clearBtn: document.querySelector(".js-clear"),
  output: document.querySelector(".js-output"),
};

window.addEventListener("keydown", onKeyPress);
refers.clearBtn.addEventListener("click", onClearOutput);

function onKeyPress(event) {
  // console.log(event);
  // console.log(event.key);
  // console.log(event.code);

  refers.output.textContent += event.key;
}

function onClearOutput() {
  refers.output.textContent = "";
}

console.log("----------------- Example-06 -----------------");

const boxRef = document.querySelector(".js-box");

boxRef.addEventListener("mouseover", onMouseOver);
boxRef.addEventListener("mouseout", onMouseOut);
boxRef.addEventListener("mousemove", onMouseMove);

function onMouseOver(event) {
  // console.log("Mouse over");

  const box = event.currentTarget;
  box.classList.add("box-active");
}

function onMouseOut(event) {
  // console.log("Mouse out");

  const box = event.currentTarget;
  box.classList.remove("box-active");
}

function onMouseMove(event) {
  console.log(event);
}

console.log("----------------- Example-06 -----------------");

const ref = {
  openModalBtn: document.querySelector("[data-action='open-modal']"),
  closeModalBtn: document.querySelector("[data-action='close-modal']"),
  backdrop: document.querySelector(".js-backdrop"),
};

ref.openModalBtn.addEventListener("click", onOpenModal);
ref.closeModalBtn.addEventListener("click", onCloseModal);
ref.backdrop.addEventListener("click", onBackdropClick);

function onBackdropClick(event) {
  console.log(event.currentTarget);
  console.log(event.target);

  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onOpenModal() {
  window.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      onCloseModal();
    }
  });
  document.body.classList.add("show-modal");
  ref.closeModalBtn.addEventListener("click", onCloseModal);
}

function onCloseModal() {
  window.removeEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      onCloseModal();
    }
  });
  document.body.classList.remove("show-modal");
  ref.closeModalBtn.removeEventListener("click", onCloseModal);
}
