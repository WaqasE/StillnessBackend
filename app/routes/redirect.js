const router = require('express').Router();
const auth = require('./auth');
const reg = require('./reg');
const status = require('./status');
const programs = require('./programs');
const posts = require('./posts');
const moments = require('./moments');
const favourites = require('./favourites');

router.use('/users/auth', auth);
router.use('/users/reg', reg);
router.use('/users/favourites', favourites);
router.use('/status', status);
router.use('/programs', programs);
router.use('/posts', posts);
router.use('/moments', moments);

module.exports = router;