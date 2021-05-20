//Imports
const router = require('express').Router();
const port = require('../config/Port');



// /api/v1/status/
router.get('/', async (req, res) => {
    res.send(`App is up and running at ${port}.`);
})

module.exports = router;