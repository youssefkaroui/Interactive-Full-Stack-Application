
//for my understanding
//initiates a jQuery function that waits for the DOM to be fully loaded before executing the code inside the function. 
//This ensures that the code runs only when the HTML structure is ready to be manipulated.

$(document).ready(function () {


  let user = $.get("/api/user").then(function (data) {
    console.log('user.email: ', data.email);
    console.log('user.id: ', data.id);
    return data;
  });
});



//this code uses jQuery to send an AJAX GET request to the `/api/user's data like email and password` endpoint, 
//which is expected to return user data. When the response is received, 
//the email and ID properties are logged to the console, and the `user` variable is assigned the resolved data. 
//The code is executed when the DOM is fully loaded, ensuring that the elements it interacts with are available.