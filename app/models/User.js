const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        favourites:{
            type: Array,
            required: true,
        },
        joined: {
            type: String,
            required: true,
        }
    }
)

const User = mongoose.model('Users', UserSchema);
exports.User = User;