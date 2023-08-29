const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bookRoutes = require('./book');

router.use('/user', userRoutes);
router.use('/book', bookRoutes);
