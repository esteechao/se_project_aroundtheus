// FormValidator.js
export default class FormValidator {
    constructor(settings, formElement) {
      this._settings = settings;
      this._formElement = formElement;
    }
  
    _showInputError(inputElement, errorMessage) {
      const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.add(this._settings.inputErrorClass);
      errorElement.textContent = errorMessage;
    }
  
    _hideInputError(inputElement) {
      const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.remove(this._settings.inputErrorClass);
      errorElement.textContent = "";
    }
  
    _checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }
    }
  
    _toggleButtonState(inputs, submitButton) {
      const isValid = inputs.every((input) => input.validity.valid);
  
      if (isValid) {
        submitButton.classList.remove(this._settings.inactiveButtonClass);
        submitButton.disabled = false;
      } else {
        submitButton.classList.add(this._settings.inactiveButtonClass);
        submitButton.disabled = true;
      }
    }
  
    _setEventListeners() {
      const inputs = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
      const submitButton = this._formElement.querySelector(this._settings.submitButtonSelector);
  
      inputs.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
          this._checkInputValidity(inputElement);
          this._toggleButtonState(inputs, submitButton);
        });
      });
  
      this._formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });
  
      this._toggleButtonState(inputs, submitButton);
    }
  
    enableValidation() {
      this._setEventListeners();
    }
  }
  