const router = require('express').Router();
const { User, Documentation,  CheckoutCart, CheckoutCart_Document } = require('../../models');


//get all checkout carts

router.get('/', async (req, res) => {
  try {
    const carts = await CheckoutCart.findAll({
      include: [Documentation],
    });

    console.log('In GET /api/checkout - findAll()');
    console.log('req.body: ', req.body);
    console.log('carts: ', carts);

    res.json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get a single cart for the user id

router.get('/user/:id', async (req, res) => {
  try {
    const cart = await CheckoutCart.findOne({
      where: {
        id: req.params.id
      },
    });

    console.log('In GET /api/checkout/:id');
    console.log('req.params.id: ', req.params.id);
    console.log('checkoutCart: ', cart);

    res.json(cart);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while fetching the checkout cart.' });
  }
});

router.post('/', async (req, res) => {
  try {
    const cart = await CheckoutCart.create({
      id: req.body.id,
      DocumentationId: req.body.DocumentationId
    });

    console.log('In POST /api/cart');
    console.log('req.body: ', req.body);
    console.log('CheckoutCart: ', cart);
    console.log('CheckoutCart.cartID: ', cart.cartID);

    // Also insert into the intermediary table
    const bookcart = await CheckoutCart_Document.create({
      cartId: CheckoutCart_Document.cartID,
      DocumentId: req.body.DocumentId,
    });

    console.log('In POST /api/checkout - CheckoutCart_Book');
    console.log('req.body: ', req.body);
    console.log('CheckoutCart_Book: ', Documentcart);

    res.json(Documentcart);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while creating the shopping cart.' });
  }
});



module.exports = router;
