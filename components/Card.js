export default class Card {
    constructor ({ name, link }, cardSelector) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
    }

    _setEventListners() {
        
    }

    getView() {
        //get the card view
        this._setEventListners()
        //return the card
    }
}

