var express = require('express');
var router = express.Router();
const commentQueries = require('../queries/comments')

router.post('/addPost', async (req, res, next) => {
  const { subreddit_id, poster_id, title, body, photo_url } = req.body
  try {
    let newPost = await commentQueries.addPost({ subreddit_id, poster_id, title, body, photo_url })
    res.json({
      payload: newPost,
      message: "Successfully created a post",
      error: false
    })
  } catch (err) {
    res.status(500).json({
      payload: null,
      message: "Failed to add a post",
      error: true
    })
  }
});
module.exports = router;