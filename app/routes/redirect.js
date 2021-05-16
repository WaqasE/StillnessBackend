const router = require('express').Router();
const auth = require('./auth');
const reg = require('./reg');

router.use('/users/auth', auth);
router.use('/users/reg', reg);

module.exports = router;