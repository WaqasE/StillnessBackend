const router = require('express').Router();
const auth = require('./auth');
const reg = require('./reg');
const status = require('./status');
const programs = require('./programs');

router.use('/users/auth', auth);
router.use('/users/reg', reg);
router.use('/status', status);
router.use('/programs', programs);

module.exports = router;