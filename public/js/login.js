const loginHandler = async (event) => {
    event.preventDefault();
  
    // Grabs the login information entered by the user
    const userEmail = document.querySelector('#email-login').value.trim();
    const userPassword = document.querySelector('#password-login').value.trim();
  
    if (userEmail && userPassword) {
      // Send a POST request to the API endpoint hanlding the user information to be authenticated 
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ userEmail, userPassword }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // Redirects the browser to the profile page after authetication
        document.location.replace('/homepage');
      } else {
        alert(response.statusText);
      }
    }
  };
  
 