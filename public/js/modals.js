    //contact modal
    const openContactModalButton = document.getElementById('openContactmodal');
    const contactModal = document.getElementById('contactModal');
    const closeModalButton = document.getElementById('closeModal');
    
    openContactModalButton.addEventListener('click', () => {
      contactModal.classList.add('is-active');
    });
    
    closeModalButton.addEventListener('click', () => {
      contactModal.classList.remove('is-active');
    });
//about modal
    const openAboutModalButton = document.getElementById('openAboutModal');
    const aboutModal = document.getElementById('aboutModal');
    const closeAboutModal = document.getElementById('closeAboutModal');
    
    openAboutModalButton.addEventListener('click', () => {
      aboutModal.classList.add('is-active');
    });
    
    closeAboutModal.addEventListener('click', () => {
      aboutModal.classList.remove('is-active');
    });
