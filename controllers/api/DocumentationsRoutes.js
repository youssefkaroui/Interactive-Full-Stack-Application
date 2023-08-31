const express = require('express').Router();
//const express = require('express');
//const Documentation = express.Router();
const {Documentation} = require('../../models');

// Route to get all books
express.get('/', async (req, res) => {
  try {
    const Documentation= await Documentation.findAll();
    console.log('In GET /api/d - findAll()');
    console.log('Documentaion: ', documentation);
    res.json(Documentation);
  } catch (err) {
    console.error('Error in GET /Documentation:', err);
    res.status(500).json({ err: 'An error occurred while fetching books.' });
  }
});

// // Route to render the book view
// express.get('/', (req, res) => {
//   res.render('documentation');
// });

// Route to get a single book by ISBN
express.get('/', async (req, res) => {
  try {
    const Documentation= await Documentation.findOne({
      where: {
        isbn: req.params.isbn
      }
    });
    console.log('In GET/ - findOne()');
    console.log('Documentation: ', Documentation);
    res.json(Documentation);
  } catch (err) {
    console.error('Error in GET /documentation/:isbn:', err);
    res.status(500).json({ err: 'An error occurred while fetching the book.' });
  }
});

// Route to create a new book
express.post('/Documentation', async (req, res) => {
  try {
    const documentation = await Documentation.create(req.body);
    console.log('In POST /api/documentation - create()');
    console.log('req.body: ', req.body);
    console.log('Documentation: ', Documentation);
    res.json(Documentation);
  } catch (err) {
    console.error('Error in POST /documentation:', err);
    res.status(500).json({ err: 'An error occurred while creating the book.' });
  }
});

// Route to delete a book by ID
express.delete('/Documentation/:isbn', async (req, res) => {
  try {
    const documentation = await Documentation.destroy({
      where: {
        isbn: req.params.isbn
      }
    });
    console.log('In DELETE /documention/:id - destroy()');
    console.log('req.params.isbn: ', req.params.id);
    console.log('Documentation: ', documentation);
    res.json(documentation);
  } catch (err) {
    console.error('Error in DELETE /documentation/:id:', err);
    res.status(500).json({ err: 'An error occurred while deleting the book.' });
  }
});

// Route to update a book by ID
express.put('/api/documentation', async (req, res) => {
  try {
    const documentations = await documentations.update(
      req.body,
      {
        where: {
          isbn: req.body.isbn
        }
      }
    );
    console.log('In PUT /document - update()');
    console.log('req.body.isbn: ', req.body.isbn);
    console.log('Documentation: ', documentation);
    res.json(documentation);
  } catch (err) {
    console.error('Error in PUT /api/book:', err);
    res.status(500).json({ err: 'Error occured while updating a book'}
  )};
  });


module.exports = express;
