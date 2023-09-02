export default class Card {
    constructor ({ name, link }, cardSelector) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
    }

    _setEventListners() {
        //".card_like-button"
        this._cardElement.querySelector(".card__like-button")
        .addEventListner('click', () =>{
            this._handleLikeIcon();
        });
        //".card_delete-button"
       this._cardElement.querySelector(
        ".card__delete-button"
        ).addEventListner('click',() => {
        this._handleDeleteCard();
       })
    }

    _handleLikeIcon(){
        this._cardElement
        .querySelector(".card__like-button")
        .classList.toggle("card__like-button_is-active");
    }


    getView() {
        this._cardElement = document
            .querySelector(this._cardSelector)
            .content.querySelector(".card")
            .cloneNode(true);

        //get the card view
        //set even listeners
        this._setEventListners();
        //return the card
    }
}

