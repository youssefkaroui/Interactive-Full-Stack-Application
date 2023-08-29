const express = require('express');
const bookRouter = express.Router();
const db = require('../../models/book');

// Route to get all books
bookRouter.get('/api/book', async (req, res) => {
  try {
    const book = await db.Book.findAll();
    console.log('In GET /api/book - findAll()');
    console.log('Books: ', book);
    res.json(book);
  } catch (err) {
    console.error('Error in GET /api/book:', err);
    res.status(500).json({ err: 'An error occurred while fetching books.' });
  }
});

// Route to render the book view
bookRouter.get('/', (req, res) => {
  res.render('book');
});

// Route to get a single book by ISBN
bookRouter.get('/api/book/:isbn', async (req, res) => {
  try {
    const book = await book.findOne({
      where: {
        isbn: req.params.isbn
      }
    });
    console.log('In GET /api/book/:isbn - findOne()');
    console.log('Book: ', book);
    res.json(book);
  } catch (err) {
    console.error('Error in GET /api/book/:isbn:', err);
    res.status(500).json({ err: 'An error occurred while fetching the book.' });
  }
});

// Route to create a new book
bookRouter.post('/api/book', async (req, res) => {
  try {
    const book = await Book.create(req.body);
    console.log('In POST /api/book - create()');
    console.log('req.body: ', req.body);
    console.log('Book: ', book);
    res.json(book);
  } catch (err) {
    console.error('Error in POST /api/book:', err);
    res.status(500).json({ err: 'An error occurred while creating the book.' });
  }
});

// Route to delete a book by ID
bookRouter.delete('/api/book/:isbn', async (req, res) => {
  try {
    const book = await book.destroy({
      where: {
        isbn: req.params.isbn
      }
    });
    console.log('In DELETE /api/books/:id - destroy()');
    console.log('req.params.id: ', req.params.id);
    console.log('Book: ', book);
    res.json(book);
  } catch (err) {
    console.error('Error in DELETE /api/book/:id:', err);
    res.status(500).json({ err: 'An error occurred while deleting the book.' });
  }
});

// Route to update a book by ID
bookRouter.put('/api/book', async (req, res) => {
  try {
    const book = await book.update(
      req.body,
      {
        where: {
          isbn: req.body.isbn
        }
      }
    );
    console.log('In PUT /api/books - update()');
    console.log('req.body.id: ', req.body.isbn);
    console.log('Book: ', book);
    res.json(book);
  } catch (err) {
    console.error('Error in PUT /api/book:', err);
    res.status(500).json({ err: 'Error occured while updating a book'}
  )};
  });


module.exports = bookRouter;
