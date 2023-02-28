const router = require('express').Router();
router.use('/users', require('./userRoutes'));
router.use('/plants', require('./plantRoutes'));
router.use('/discussions', require('./discussionRoutes'));

module.exports = router;