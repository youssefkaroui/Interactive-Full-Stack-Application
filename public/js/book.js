// tabs.js

document.addEventListener('DOMContentLoaded', function () {
    const openBooksTab = document.getElementById('openBooksTab');
  
    openBooksTab.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default link behavior
      window.location.href = '/Documentation';
    });
  });
  


  // load Book.js

document.addEventListener('DOMContentLoaded', function () {
    const bookContainer = document.querySelector('.book-container');
    const nextButton = document.getElementById('nextButton');
  
    // Replace with your book data
    const book = {
      title: 'JavaScript for Beginners',
      category: 'Programming',
      // ... other book properties ...
    };
  
    // Generate the book HTML dynamically
    const bookHTML = `
      <div class="card">
        <!-- ... Your existing card content ... -->
      </div>
      <!-- book.handlebars-->
      <div class="book-container">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content is-centered">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">${book.title}</p>
                <p class="subtitle is-6">${book.category}</p>
              </div>
            </div>
        
            <div class="content">
            This is a JavaScript book for beginners.<br>
               <button class="button is-link" href="/checkout">Add to cart</button>
              <a href="#">#css</a> <a href="#">#responsive</a>
              <br>
         </div>
          </div>
        </div>  </div> -->
`;
  
  
    // Add event listener to the "Next" button
    nextButton.addEventListener('click', function () {
      // Handle next button click here
      // You can navigate to the next page or perform any desired action
    });
  });
  