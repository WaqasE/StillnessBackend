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
        var userExist = await User.findOne({ _id: data._id });
        const programExist = await Program.findOne({ _id: data.programId });
        if (userExist && programExist) {
            const userFav = userExist['favourites'];
            var userFavUpdated = userFav[0];
            userFavUpdated[userFavUpdated.length] = { programId: data.programId, programName: data.programName, programObjectCount: data.programObjectCount };
            userExist['favourites'].set(0, userFavUpdated);
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
    const data = _.pick(req.body, ['_id', 'momentId', 'momentName', 'momentObjectCount']);
    if (data._id && data.momentId && data.momentName && data.momentObjectCount) {
        var userExist = await User.findOne({ _id: data._id });
        const momentExist = await Moment.findOne({ _id: data.momentId });
        if (userExist && momentExist) {
            const userFav = userExist['favourites'];
            var userFavUpdated = userFav[1];
            userFavUpdated[userFavUpdated.length] = { momentId: data.momentId, momentName: data.momentName, momentObjectCount: data.momentObjectCount };
            userExist['favourites'].set(1, userFavUpdated);
            await userExist.save(userExist);
            res.status(200).send(userExist);
        }
        else {
            next({
                status: 400,
                msg: 'Invalid user or moment!'
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

router.post('/post', async (req, res, next) => {
    const data = _.pick(req.body, ['_id', 'postId']);
    if (data._id && data.postId) {
        var userExist = await User.findOne({ _id: data._id });
        const postExist = await Post.findOne({ _id: data.postId });
        if (userExist && postExist) {
            const userFav = userExist['favourites'];
            var userFavUpdated = userFav[2];
            userFavUpdated[userFavUpdated.length] = { postId: data.postId };
            userExist['favourites'].set(2, userFavUpdated);
            await userExist.save(userExist);
            res.status(200).send(userExist);
        }
        else {
            next({
                status: 400,
                msg: 'Invalid user or post!'
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

router.post('/favs', async (req, res, next) => {
    const data = _.pick(req.body, ['_id']);
    if (data._id) {
        var userExist = await User.findOne({ _id: data._id });
        if (userExist) {
            const userFav = userExist['favourites'];
            res.status(200).send(userFav);
        }
        else {
            next({
                status: 400,
                msg: 'Invalid user'
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

module.exports = router;

