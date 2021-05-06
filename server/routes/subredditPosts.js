const express = require('express');
const router = express.Router();
const subredditPostsQueries = require('../queries/subredditPosts')



router.get('/allPosts/:username', async (req, res, next) => {
    const { username } = req.params
  
    try {
      let posts = await subredditPostsQueries.getAllPostsByUsername(username)

      res.json({
        payload: posts,
        message: "Retrieved all posts from user",
        error: false
      })
    } catch (err) {
      res.status(500).json({
        payload: null,
        message: "Failed retrieving all posts from user",
        error: true
      })
    }
  
  });


  module.exports = router;