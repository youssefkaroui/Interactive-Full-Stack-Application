const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const userName = document.querySelector('#name-signup').value.trim();
    const userEmail = document.querySelector('#email-signup').value.trim();
    const userPassword = document.querySelector('#password-signup').value.trim();
  
    if ( userEmail && userPassword) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ userName, userEmail, userPassword }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/homepage');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
  