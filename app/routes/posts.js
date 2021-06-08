//Imports
const router = require('express').Router();
const _ = require('lodash');


// Custom Imports
const { Post } = require('../models/Post');


// /api/v1/posts
router.post('/', async (req, res, next) => {
    const data = _.pick(req.body, ['title', 'body', 'image']);
    const newPost = new Post({ title: data.title, body: data.body, image: data.image })
    newPost.save(newPost);
    return res.send(newPost);
})

router.get('/', async (req, res, next) => {
    const posts = await Post.find({});
    return res.status(200).send(posts)
})

module.exports = router;