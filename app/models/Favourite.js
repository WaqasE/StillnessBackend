const mongoose = require('mongoose');
const { User } = require('./User');
const FavouriteSchema = new mongoose.Schema(
    {
        userId: {
            type: User,
            required: true,
        },
        programs: {
            type: Array,
            required: true,
        },
        moments: {
            type: Array,
            required: true,
        },
        posts: {
            type: Array,
            required: true,
        }
    }
)

const Favourite = mongoose.model(Favourite, FavouriteSchema);
exports.Favourite = Favourite;