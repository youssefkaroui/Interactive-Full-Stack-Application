const router = require('express').Router();
const userRoutes = require('./userRoutes');
const DocumentationRoutes = require('./DocumentationsRoutes');
const express = require('./DocumentationsRoutes');

router.use('/user', userRoutes);
router.use('/Documentation', express);


module.exports = router;