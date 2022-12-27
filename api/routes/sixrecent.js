const router = require("express").Router();
const Post = require("../models/Post");

//Get six most recent posts
router.get("/", async (req, res) => {
    
    try {
        const posts = await Post.find().sort({createdAt:-1}).limit(6);

        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
