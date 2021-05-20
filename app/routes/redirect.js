const router = require('express').Router();
const auth = require('./auth');
const reg = require('./reg');
const status = require('./status');

router.use('/users/auth', auth);
router.use('/users/reg', reg);
router.use('/status', status);

module.exports = router;