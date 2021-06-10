//Imports
const router = require('express').Router();
const _ = require('lodash');
const bycrypt = require('bcrypt');
const moment = require('moment');
const jwt = require('jsonwebtoken');


// Custom Imports
const { User } = require('../models/User');



// /api/v1/users/reg/
router.post('/', async (req, res, next) => {
    const data = _.pick(req.body, ['name', 'email', 'password', 'joined']);
    console.log(data);
    if (data.name && data.email && data.password && data.joined) {
        if (await User.findOne({ email: data.email })) {
            next({
                status: 400,
                msg: 'User already exists!'
            })
        }
        else {
            const salt = await bycrypt.genSalt(10);
            const password = await bycrypt.hash(data.password, salt);
            const newUser = new User({ name: data.name, email: data.email, password: password, joined: data.joined });
            await newUser.save(newUser);
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