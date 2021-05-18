//Imports
const router = require('express').Router();
const _ = require('lodash');
const bycrypt = require('bcrypt');
const moment = require('moment');
const jwt = require('jsonwebtoken');


// Custom Imports
const { User } = require('../models/User');
const { Favourite } = require('../models/Favourite');



// /api/v1/users/reg/
router.post('/', async (req, res, next) => {
    const data = _.pick(req.body, ['name', 'email', 'password']);
    if (data.name && data.email && data.password) {
        if (await User.findOne({ email: data.email })) {
            next({
                status: 400,
                msg: 'User already exists!'
            })
        }
        else {
            const salt = await bycrypt.genSalt(10);
            const password = await bycrypt.hash(data.password, salt);
            const newUser = new User({ name: data.name, email: data.email, password: password, joined: moment().format('MMMM Do YYYY, h:mm:ss a') });
            await newUser.save(newUser);
            const userFav = new Favourite({ user: newUser._id, programs: [], moments: [], posts: [] });
            await userFav.save(userFav);
            const token = jwt.sign(_.pick(newUser, ['_id', 'name', 'joined']), process.env.JWTPRIVATEKEY);
            return res.status(200).send(token);
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