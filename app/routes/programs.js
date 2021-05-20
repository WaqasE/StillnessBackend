//Imports
const router = require('express').Router();
const _ = require('lodash');


// Custom Imports
const { Program } = require('../models/Program');


// /api/v1/programs
router.post('/', async (req, res, next) => {
    const data = _.pick(req.body, ['name', 'image', 'excerpt', 'intro', 'middle', 'centering', 'outro']);
    const newProgram = new Program({ name: data.name, image: data.image, excerpt: data.excerpt, intro: data.intro, middle: data.middle, centering: data.centering, outro: data.outro })
    newProgram.save(newProgram);
    return res.send(newProgram);
})

router.get('/', async (req, res, next) => {
    const programs = await Program.find({});
    return res.status(200).send(programs)
})

module.exports = router;