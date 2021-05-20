const mongoose = require('mongoose');
const ProgramSchema = new mongoose.Schema(
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
        intro: {
            type: Array,
            required: true,
        },
        middle: {
            type: Array,
            required: true,
        },
        centering: {
            type: Array,
            required: true,
        },
        outro: {
            type: Array,
            required: true,
        }

    }
)

const Program = mongoose.model('Program', ProgramSchema);
exports.Program = Program;