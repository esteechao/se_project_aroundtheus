const initialCards = [
    {
        name: "Yosemite Valley",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
    },
    {
        name: "Lake Louise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
    },   
    {
        name: "Bald Mountains",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
    },
    {
        name: "Latemar",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
    },
    {
        name: "Vanoise National Park",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
    },
    {
        name: "Lago di Braies",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
    },
];

/***************************************
 *                                      *
 *               Elements               *
 *                                      *
 ***************************************/
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileCloseModal = profileEditModal.querySelector("#.modal__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardListEl = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

// Card modal elements
const addNewCardButton = document.querySelector(".profile__add-button");
const addCardModal = document.querySelector("#add-place-modal");
const addCardFormEl = addCardModal.querySelector(".modal__form");
const addCardCloseButton = addCardModal.querySelector(".modal__close");
const cardTitleInput = document.querySelector("#card-title-input");
const cardUrlInput = document.querySelector("#card-url-input");

//image preview elements
const imagePreviewModal = document.querySelector("#image-preview-modal");

const closeImageBtn = imagePreviewModal.querySelector(".modal__close");

closeImageBtn.addEventListener("click", () => {
  closePopup(imagePreviewModal);
});

/***************************************
 *                                      *
 *               Functions              *
 *                                      *
 ***************************************/

function closePopup(modal) {
    modal.classList.remove("modal_opened");
  }
  function openPopup(modal) {
    modal.classList.add("modal_opened");
  }

  function getCardElement(cardData) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardTitleEl = cardElement.querySelector(".card__title");
    const cardImageEl = cardElement.querySelector(".card__image");
    const likeButton = cardElement.querySelector(".card__like-button");
    const deleteBtn = cardElement.querySelector(".card__delete-button");

    deleteBtn.addEventListener("click", () => {
      cardElement.remove(".card");
    });

    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("card__like-button_active");
    });

    cardImageEl.addEventListener("click", () => {
      openPopup(imagePreviewModal);
      const modalImageEl = document.querySelector(".modal__card-image-preview");
      const modalTitleEl = document.querySelector(".modal__image-title");
      modalImageEl.setAttribute("src", cardImageEl.src);
      modalImageEl.alt = cardData.name;
      modalTitleEl.textContent = cardData.name;
    });
  
    cardImageEl.src = cardData.link;
    cardImageEl.alt = cardData.name;
    cardTitleEl.textContent = cardData.name;
  
    return cardElement;
  }

  function renderCard(cardData, wrapper) {
    const cardElement = getCardElement(cardData);
    wrapper.prepend(cardElement);
  } 
/***************************************
 *                                      *
 *            Events Handlers           *
 *                                      *
 ***************************************/

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
}

function handleAddCardSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardsWrap);
  closePopup(addCardModal);
  document.getElementById("modal-form").reset();
}

/***************************************
 *                                      *
 *            Event Listeners           *
 *                                      *
 ***************************************/
profileEditButton.addEventListener("click", () => {
    profileTitleInput.value = profileTitle.textContent;
    profileDescriptionInput.value = profileDescription.textContent;
    openPopup(profileEditModal);
  });
  
  profileEditCloseButton.addEventListener("click", () =>
  closePopup(profileEditModal)
);
  profileEditForm.addEventListener("submit", handleProfileEditSubmit);
  addCardFormEl.addEventListener("submit", handleAddCardSubmit);

// New card
  addNewCardButton.addEventListener("click", () => openPopup(addCardModal));
  addCardCloseButton.addEventListener("click", () => closePopup(addCardModal));

  initialCards.forEach((cardData) => renderCard(cardData, cardsWrap));