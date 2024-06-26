// FormValidator.js
export default class FormValidator {
    constructor(settings, formElement) {
      this._settings = ettings;
      this._formElement = formElement;
      this._submitButton = this._formElement.querySelector{
        this._settings.submitButtonSelector
      };
    }

    _showInputError(inputElement, errorMessage) {
      const errorElement = this._formElement.querySelector(
        `#${inputElement.id}-error`
        );
      inputElement.classList.add(this._settings.inputErrorClass);
      errorElement.textContent = errorMessage;
    }
    
    _hideInputError(inputElement) {
      const errorElement = this._formElement.querySelector(
        `#${inputElement.id}-error`
        );
      inputElement.classList.remove(this._settings.inputErrorClass);
      errorElement.textContent = "";
    }
  
    _checkInputValidity() {
      
      const inputList = [
        ...this._formElement.querySelectorAll(this._settings.inputSelector),
      ];

      return inputList.every((input) => input.validity.valid);
      }
  
    toggleButtonState() {
      const isValid = this._checkInputValidity;
  
      if (isValid) {
        this._submitButton.classList.remove(this._settings.inactiveButtonClass);
        this._submitButton.disabled = false;
      } else {
        this._submitButton.classList.add(this._settings.inactiveButtonClass);
        this._submitButton.disabled = true;
      }
    }
  
    _setEventListeners() {
      this._inputs = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
      this._submit = this._formElement.querySelector(this._settings.submitButtonSelector);
  
      inputs.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
          this._checkInputValidity(inputElement);
          this._toggleButtonState();
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
  