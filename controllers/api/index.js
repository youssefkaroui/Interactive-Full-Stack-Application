const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

const userRoutes = require('./userRoutes')
const bookRoutes = require('./book')
const signupRoutes =require('./signupRoutes')


router.use('/user', userRoutes);
router.use('/signup', signupRoutes);
router.use('/book', bookRoutes);
