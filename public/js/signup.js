const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const firstName = document.querySelector('#first-name').value.trim();
    const lastName = document.querySelector('#last-name').value.trim();
    const userEmail = document.querySelector('#email-signup').value.trim();
    const userPassword = document.querySelector('#password-signup').value.trim();

    if (firstName && lastName && userEmail && userPassword) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ firstname: firstName, lastname: lastName, email: userEmail, password: userPassword }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
  