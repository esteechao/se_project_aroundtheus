export default class Card {
    constructor ({ name, link }, cardSelector) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
        this._cardElement = null;
    }

    _getTemplate() {
        const cardElement = document
          .querySelector(this._cardSelector)
          .content.querySelector(".card")
          .cloneNode(true);
        return cardElement;
      }    

    _setEventListeners() {
        this._likeButton.addEventListener("click", this._handleLikeIcon.bind(this));
        this._deleteButton.addEventListener("click", this._handleDeleteCard.bind(this));
        this._cardElement.querySelector(".card__like-button").addEventListener('click', () => {
          this._handleLikeIcon();
        });
      }

    _handleDeleteCard() {
        this._cardElement.remove();
        this._element = null;
    }

    _handleLikeIcon(){
        this._cardElement
        .querySelector(".card__like-button")
        .classList.toggle("card__like-button_is-active");
    }

    getView() {
        const cardTemplate = document
          .querySelector(this._cardSelector)
          .content.querySelector(".card");
    
        this._cardElement = cardTemplate.cloneNode(true);
    
        const cardTitleEl = this._cardElement.querySelector(".card__title");
        const cardImageEl = this._cardElement.querySelector(".card__image");
    
        cardTitleEl.textContent = this._name;
        cardImageEl.src = this._link;
        cardImageEl.alt = "Image of " + this._name;
    
        this._setEventListeners();
    
        return this._cardElement;
      }
    }
