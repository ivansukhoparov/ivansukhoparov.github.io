const body = document.querySelector('body');
const modalOpenButton = document.querySelector('.contacts__buton');
const modalWindow = document.querySelector('.modal-contacts ');
const modalCloseButton = document.querySelector('.modal__close-button');
const contactForm = document.querySelector('#contact-popup');
//const contactFormSubmit = contactForm.querySelector('.modal-contacts__submit');

const onEscapeKeyDown = function (evt) {
  if (isEscapeKey(evt)) {
    closeModal();
  };
};

const closeModal = function () {
  modalWindow.classList.add('hidden');
  body.classList.remove('modal-open');
  body.removeEventListener('keydown', onEscapeKeyDown);
};

const showModal = function () {
  modalWindow.classList.remove('hidden');
  body.classList.add('modal-open');
  body.addEventListener('keydown', onEscapeKeyDown);
};

function isEscapeKey(evt) {
  return evt.key === 'Escape';
};

modalOpenButton.addEventListener('click', showModal);
modalCloseButton.addEventListener('click', closeModal);

contactForm.addEventListener('submit',((evt)=>{
  evt.preventDefault();
  closeModal();
}))
