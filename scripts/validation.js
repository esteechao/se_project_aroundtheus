// enabling validation by calling enableValidation()
// pass all the settings on call

function showError(formEl, inputEl, { inputErrorClass, errorClass }) {
    const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(options.inputErrorClass);
}

// ! ||--------------------------------------------------------------------------------||
// ! ||                           Validity Check and Input                           ||
// ! ||--------------------------------------------------------------------------------||
function checkInputValidity(inputEl, submitButton, content) {
    if (!inputEl.validity.valid) {
    return showInputError(formEl, inputEl, content);
    }
        hideInputError(formEl, inputEl, content);
}

function hasInvalidInput(inputList) {
    return !input.every((inputEl) => inputEl.validity.valid)
}

// ! ||--------------------------------------------------------------------------------||
// ! ||                                  Button State                                  ||
// ! ||--------------------------------------------------------------------------------||
const disableButton = (submitButton, { inactiveButtonClass }) => {
  submitButton.classList.add(inactiveButtonClass);
  submitButton.disabled = true;
};

const enableButton = (submitButton, { inactiveButtonClass }) => {
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = false;
};

function toggleButtonState(inputEls, submitButton, { inactiveButtonClass }) {

    if(foundinInvalid(inputEls)) {
        submitButton.classList.add(inactiveButtonClass);
       submitButton.disabled = true;
       return;
    }
        submitButton.classList.remove(inactiveButtonClass);
        submitButton.disabled = false;
}
// ! ||--------------------------------------------------------------------------------||
// ! ||                             Listener and Validation                            ||
// ! ||--------------------------------------------------------------------------------||

function setEventListeners(formEl, content) {
    const { inputSelector } = content;
    const inputEls = [...formEl.querySelectorAll(inputSelector)];
    const submitButton = formEl.querySelector(".modal__button");
  
    inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        checkInputValidity(formEl, inputEl, content);
        toggleButtonState(inputEls, submitButton, content);
      });
    });
  }
   

  function enableValidation(content) {
    const formEls = [...document.querySelectorAll(content.formSelector)];
    formEls.forEach((formEl) => {
      formEl.addEventListener("submit", (e) => {
        e.preventDefault();
      });
      setEventListeners(formEl, content);
    });
  }

const config = {
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible",
};

enableValidation(config);