const express = require('express').Router();
// // Route to render the book view
 express.get('/', (req, res) => {
 res.render('documentation');
 });
 
 module.exports = express;