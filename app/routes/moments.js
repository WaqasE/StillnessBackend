//Imports
const router = require('express').Router();
const _ = require('lodash');


// Custom Imports
const { Moment } = require('../models/Moment');


// /api/v1/moments
router.post('/', async (req, res, next) => {
    const data = _.pick(req.body, ['name', 'image', 'excerpt', 'short', 'normal', 'long']);
    const newMoment = new Moment({ name: data.name, image: data.image, excerpt: data.excerpt, short: data.short, normal: data.normal, long: data.long })
    newMoment.save(newMoment);
    return res.send(newMoment);
})

router.get('/', async (req, res, next) => {
    const moments = await Moment.find({});
    return res.status(200).send(moments)
})

module.exports = router;