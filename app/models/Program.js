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
            type: String,
            required: true,
        },
        middle: {
            type: String,
            required: true,
        },
        centering: {
            type: String,
            required: true,
        },
        outro: {
            type: String,
            required: true,
        }

    }
)

const Program = mongoose.model('Program', ProgramSchema);
exports.Program = Program;