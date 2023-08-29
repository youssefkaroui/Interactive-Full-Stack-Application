const loginHandler = async (event) => {
    event.preventDefault();
  
    // Grabs the login information entered by the user
    const userEmail = document.querySelector('#email-login').value.trim();
    const userPassword = document.querySelector('#password-login').value.trim();
  
    if (userEmail && userPassword) {
      // Send a POST request to the API endpoint hanlding the user information to be authenticated 
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ userEmail, userPassword }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // Redirects the browser to the profile page after authetication
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupHandler = async (event) => {
    event.preventDefault();
  
    const userName = document.querySelector('#name-signup').value.trim();
    const userEmail = document.querySelector('#email-signup').value.trim();
    const userPassword = document.querySelector('#password-signup').value.trim();
  
    if ( userEmail && userPassword) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ userName, userEmail, userPassword }),
        headers: { 'Content-Type': 'application/json' },
      });
                 
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupHandler);
  