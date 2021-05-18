const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        }
    }
)

const Post = mongoose.model('Post', PostSchema);
exports.Post = Post;