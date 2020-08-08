const express = require('express');
const router = express.Router();
const subredditPostsQueries = require('../queries/subredditPosts')
const subredditQueries = require('../queries/subreddit')


router.get('/', async (req, res, next) => {
  try {
    let posts = await subredditPostsQueries.getAllPostBySubbreddit()
    res.json({
      payload: posts,
      message: "Retrieved all posts from subreddit",
      error: false
    })
  } catch (err) {
    res.status(500).json({
      payload: null,
      message: "Failed retrieving all posts from subreddit",
      error: true
    })
  }

});

router.get('/:subreddit_id', async (req, res, next) => {
  const { subreddit_id } = req.params
  let subredditId = parseInt(subreddit_id)
  try {
    let posts = await subredditQueries.getSubbredditById(subredditId)
    res.json({
      payload: posts,
      message: "Retrieved all posts from subreddit",
      error: false
    })
  } catch (err) {
    res.status(500).json({
      payload: null,
      message: "Failed retrieving all posts from subreddit",
      error: true
    })
  }

});



router.get('/name/:subreddit_name', async (req, res, next) => {
  const { subreddit_name } = req.params
  try {
    let posts = await subredditQueries.getSubbredditByName(subreddit_name)
    res.json({
      payload: posts,
      message: "Retrieved all posts by  subreddit name",
      error: false
    })
  } catch (err) {
    res.status(500).json({
      payload: null,
      message: "Failed retrieving all posts from subreddit",
      error: true
    })
  }

});



router.post('/add', async (req, res, next) => {
  
  const { subreddit_name, subreddit_description, subreddit_admin } = req.body

  try {
    let newSubreddit = await subredditQueries.addNewSubreddit({ subreddit_name, subreddit_description, subreddit_admin })
  
    res.json({
      payload: newSubreddit,
      message: "Successfully created a new community",
      error: false
    })
  } catch (err) {
    res.status(500).json({
      payload: null,
      message: "Failed to create a new community",
      error: true
    })
  }

});



module.exports = router;