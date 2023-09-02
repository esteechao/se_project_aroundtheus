export default class Card {
    constructor ({ name, link }, cardSelector) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
    }

    _setEventListners() {
        //".card_like-button"
        const likeButton = this._cardElement.querySelector('.card__like-button');
        //".card_delete-button"
        const deleteButton = this._cardElement.querySelector('card__delete-button');
    }

    getView() {
        this._cardElement = document
            .querySelector(this._cardSelector)
            .content.querySelector('.card')
            .cloneNode(true);
        //get the card view
        this._setEventListners();
        //return the card
    }
}

