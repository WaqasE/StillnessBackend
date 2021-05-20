//Imports
const router = require('express').Router();
const _ = require('lodash');
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



// Custom Imports
const { User } = require('../models/User');
const { Favourite } = require('../models/Favourite');
const Time = require('../utility/Time')

// /api/v1/users/auth/
router.post('/', async (req, res, next) => {
    const data = _.pick(req.body, ['email', 'password']);
    if (data.email && data.password) {
        const userExist = await User.findOne({ email: data.email });
        if (userExist) {
            const validPassword = await bycrypt.compare(data.password, userExist.password);
            if (!validPassword) return res.status(400).send('Invalid email or password!');
            const token = jwt.sign(_.pick(userExist, ['_id', 'name', 'joined']), process.env.JWTPRIVATEKEY);
            return res.status(200).send(token);
        }
        else {
            next({
                status: 400,
                msg: 'Invalid email or password!'
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