const router = require('express').Router();

router.post('/', (req, res) => {
    res.send('Reg');
})

module.exports = router;