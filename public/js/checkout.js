document.addEventListener('Load Content', () => {

    let clearCarts;
  
    // Get logged in user's data
    let user = fetch("/api/userinfo")
      .then(response => response.json())
      .then(data => {
        console.log('user.email: ', data.email);
        console.log('user.id: ', data.id);
        return data;
      });
  
    // ******************** Event listeners *********************
    document.addEventListener('click', (event) => {
  
      // Continue browsing button clicked
      if (event.target.id === 'continueBrowsing') {
        window.location.href = "/book";
      }
    
      // Confirm purchase button clicked
      if (event.target.id === 'placeOrder') {
        fetch("/api/user")
          .then(response => response.json())
          .then(data => {
            console.log('user.email: ', data.email);
            console.log('user.id: ', data.id);
  
            // Add the book to homepage
            clearCarts.forEach((cart) => {
              Object.values(cart).forEach((cartElement) => {
                if (typeof cartElement === 'object' && cartElement !== null && cartElement[0] !== undefined) {
                  fetch("/api/homepage", {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      UserId: data.id,
                      BookId: cartElement[0].id
                    })
                  })
                  .then(response => response.json())
                  .then(cart_answer => {
                    // Handle response if needed
                    // window.location.href = "/cart";
                  });
                }
              });
            });
  
            // Delete the shopping cart
            fetch(`/api/checkout/${data.id}`, {
              method: 'DELETE'
            })
            .then(cart_answer => {
              console.log('Cart deleted: ', cart_answer);
            });
  
            // Display the modal
            const purchaseConfirmationModal = document.getElementById('purchaseConfirmationModal');
            purchaseConfirmationModal.classList.add('is-active');
  
            // Refresh shopping cart table and show purchase history
            purchaseConfirmationModal.addEventListener('hidden.bs.modal', function (e) {
              loadShoppingcart();
            //   document.getElementById('purchasesDiv').classList.remove('hidden');
              document.getElementById('placeOrder').classList.add('hidden');
            });
          });
      }
    });
  
    // ******************** Functions *********************
    const loadCart = () => {
      console.log('loadCart()');
  
      const cartTableBody = document.getElementById('cartTableBody');
      cartTableBody.innerHTML = '';
  
      // Load shopping carts
      fetch("/api/checkout/")
        .then(response => response.json())
        .then(clearCarts => {
          let total = 0;
  
          if (clearCarts.length > 0) {
            clearCarts = clearCarts.map((cart) => {
              return {
                id: cart.id,
                UserId: cart.UserId,
                Books: cart.BookId
              };
            });
  
            clearCarts.forEach((cart) => {
              let tr = document.createElement('tr');
              let td0 = document.createElement('td');
              let td1 = document.createElement('td');
              let td2 = document.createElement('td');
              let td3 = document.createElement('td');
              let td4 = document.createElement('td');
              td0.textContent = cart.id;
              td1.textContent = cart.UserId;
              Object.values(cart).forEach((cartElement) => {
                if (typeof cartElement === 'object' && cartElement !== null && cartElement[0] !== undefined) {
                  td2.textContent = cartElement[0].id;
                  td3.textContent = cartElement[0].title;
                  td4.textContent = cartElement[0].price;
                  td5.textContent= cartElement[0].numberofcheckouts;
                  total += parseFloat(cartElement[0].price);
                }
                tr.appendChild(td0);
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
              });
              cartTableBody.appendChild(tr);
            });
            total = total.toFixed(2);
            let tr = document.createElement('tr');
            let td0 = document.createElement('td');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            let td4 = document.createElement('td');
            td3.textContent = 'Total';
            td4.textContent = total;
            tr.appendChild(td0);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            cartTableBody.appendChild(tr);
          } else {
            document.getElementById('placeOrder').classList.add('hidden');
          }
        });
    };
  
    // Call the loadShoppingcart function on page load
    loadCart();
  
  });
  