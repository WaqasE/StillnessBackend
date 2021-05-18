const mongoose = require('mongoose');
const MomentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        excerpt: {
            type: String,
            required: true,
        },
        short: {     //15 min
            type: String,
            required: true,
        },
        normal: {   //30 min
            type: String,
            required: true,
        },
        long: {     //1 hour
            type: String,
            required: true,
        }
    }
)

const Moment = mongoose.model('Moment', MomentSchema);
exports.Moment = Moment;