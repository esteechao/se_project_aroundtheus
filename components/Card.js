export default class Card {
    constructor ({ name, link }, cardSelector) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
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

    _handleImageClick() {
      
    }

    getView() {
        const cardTemplate = document
          .querySelector(this._cardSelector)
          .content.querySelector(".card");
    
        this._cardElement = cardTemplate.cloneNode(true);
    
        const cardTitleEl = this._cardElement.querySelector(".card__title");
        const cardImageEl = this._cardElement.querySelector(".card__image");
        this._likeButton = this._cardElement.querySelector(".card__like-button");
        this._deleteButton = this._cardElement.querySelector(".card__delete-button");
    
        cardTitleEl.textContent = this._name;
        this._cardImage = this._cardElement.querySelector(".card__image");
        cardImageEl.src = this._link;
        cardImageEl.alt = "Image of " + this._name;
    
        this._setEventListeners();
    
        return this._cardElement;
      }
    }
