const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const authMiddleware = require('../middlewaree/authMiddleware');
const roleMiddleware = require('../middlewaree/roleMiddleware');

router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch (err) {
        res.json({ message: err });
    }
});


router.post('/', roleMiddleware(["ADMIN"]), async (req, res) => {
    const post = new Post({
        img: req.body.img,
        typeSell: req.body.typeSell,
        typeBuild: req.body.typeBuild,
        countRooms: req.body.countRooms,
        longDescription: req.body.longDescription,
        price: req.body.price,
        address: req.body.address,
        description: req.body.description
    });
    try{
    const savedPost = await post.save();
    res.json(savedPost);
    }catch (err) {
        res.json({ message: err });
    }
});


router.delete('/:postId', roleMiddleware(["ADMIN"]), async (req, res) => {
    try{
        const removedPost = await Post.remove({ _id: req.params.postId });
        res.json(removedPost);
    }catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;