const router = require('express').Router();
const apiRoutes = require('./api/index');
const homeRoutes = require('./homeRoutes');
const DocumentationsView = require('./DocumentationsView');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/Documentation', DocumentationsView);
module.exports = router;