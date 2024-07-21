const express = require('express');
const Post = require('../models/Post');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

// Create new post
router.post('/', auth, async (req, res) => {
    const { title, content } = req.body;
    try {
        const newPost = new Post({ title, text, author: req.user.id });
        const post = await newPost.save();
        res.json(post);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Get all posts
router.get('/', auth, async (req, res) => {
    try {
        const posts = await Post.find().populate('author', ['username']);
        res.json(posts);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
});

module.exports = router; // Export router