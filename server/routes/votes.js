var express = require('express');
const router = express.Router();
const voteQueries = require('../queries/votes')


router.post('/updateVote', async (req, res, next) => {
  const { subreddit_posts_id, voter_id, votes } = req.body


  try {
    let updatedVote = await voteQueries.updateVote({ subreddit_posts_id, voter_id }, { subreddit_posts_id, voter_id, votes })

    res.json({
      payload: updatedVote,
      message: "Successfully voted",
      error: false
    })
  } catch (err) {
    res.status(500).json({
      payload: null,
      message: "Failed to vote",
      error: true
    })
  }
});
module.exports = router;