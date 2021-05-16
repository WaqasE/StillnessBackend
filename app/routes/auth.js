const router = require('express').Router();
router.post('/', (req, res) => {
    res.status(200).send('ath')
})

module.exports = router;