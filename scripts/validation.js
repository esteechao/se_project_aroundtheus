// enabling validation by calling enableValidation()
// pass all the settings on call

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

setEventListener(formEl, options);
//look for all inputs inside of form
//loop through all the inputs to see if all are valid
//if input is not valid 
//get validation message
//add error class to input
//display error message
//disable button
//if all inputs are valid 
//enable button
//reset error messages


const config = {
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible",
};

enableValidation(config);