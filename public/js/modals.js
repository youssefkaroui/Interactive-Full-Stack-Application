// modals.js

document.addEventListener('DOMContentLoaded', function () {

  // Open "About Us" Modal
  const openAboutModal = document.getElementById('openAboutModal');
  const aboutModal = document.getElementById('aboutModal');
  const closeAboutModal = document.getElementById('closeAboutModal');

  openAboutModal.addEventListener('click', function () {
    aboutModal.classList.add('is-active');
  });

  // Close "About Us" Modal
  closeAboutModal.addEventListener('click', () => {
    aboutModal.classList.remove('is-active');
  });

  // Open "Contact Us" Modal
  const openContactModal = document.getElementById('openContactmodal');
  const contactModal = document.getElementById('contactModal');
  const closeModalButton = document.getElementById('closeModal');

  openContactModal.addEventListener('click', () => {
    contactModal.classList.add('is-active');
  });

  // Close "Contact Us" Modal
  closeModalButton.addEventListener('click', () => {
    contactModal.classList.remove('is-active');
  });

});
