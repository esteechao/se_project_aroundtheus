export default class Card {
    constructor ({ name, link }, cardSelector) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
    }

    _setEventListners() {
        //".card_like-button"
        const likeButton = this._cardElement.querySelector('.card_like-button');
        //".card_delete-button"
    }

    getView() {
        this._cardElement = document
            .querySelector(this._cardSelector)
            .cloneNode(true);
        //get the card view
        this._setEventListners();
        //return the card
    }
}

