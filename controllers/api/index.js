const router= require('express').Router();

const userRoutes = require('./userRoutes')
const bookRoutes = require('./bookboard')
const signupRoutes =require('./signupRoutes')


router.use('/login', userRoutes);
router.use('/signup', signupRoutes);
router.use('/books', bookRoutes);

module.exports= router;