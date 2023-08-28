const router = require('express').Router();
 const {  User,  } = require('../models');
 const withAuth = require('../utils/auth');
//  const userRoutes = require('./api/userRoutes')

router.get('/',(req,res) =>{
    res.render('homepage');
  
  
    })
  








module.exports = router;