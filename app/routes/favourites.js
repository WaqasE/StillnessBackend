//Imports
const router = require('express').Router();
const _ = require('lodash');
const bycrypt = require('bcrypt');
const moment = require('moment');
const jwt = require('jsonwebtoken');


// Custom Imports
const { User } = require('../models/User');
const { Program } = require('../models/Program');
const { Moment } = require('../models/Moment');
const { Post } = require('../models/Post');



// /api/v1/users/fav/
router.post('/program', async (req, res, next) => {
    const data = _.pick(req.body, ['_id', 'programId', 'programName', 'programObjectCount']);
    if (data._id && data.programId && data.programName && data.programObjectCount) {
        const userExist = await User.findOne({ _id: data._id });
        const programExist = await Program.findOne({ _id: data.programId });
        if (userExist && programExist) {
            const userFav = userExist['favourites'];
            var userFavUpdated = {};
            console.log(userFavUpdated);
            userExist['favourites'] = [{}, { ...userFav[1] }, { ...userFav[2] }];
            await userExist.save(userExist);
            res.status(200).send(userExist);
        }
        else {
            next({
                status: 400,
                msg: 'Invalid user or program!'
            })
        }
    }
    else {
        next({
            status: 400,
            msg: 'Invalid input!'
        })
    }
})

router.post('/moment', async (req, res, next) => {
    const data = _.pick(req.body, ['_id', 'momentId']);
    if (data.name && data.email && data.password && data.joined) {

    }
    else {
        next({
            status: 400,
            msg: 'Invalid input!'
        })
    }
})

router.post('/post', async (req, res, next) => {
    const data = _.pick(req.body, ['_id', 'postId']);
    if (data.name && data.email && data.password && data.joined) {

    }
    else {
        next({
            status: 400,
            msg: 'Invalid input!'
        })
    }
})

module.exports = router;


            // { programId: data.programId, programName: data.programName, programObjectCount: data.programObjectCount }
