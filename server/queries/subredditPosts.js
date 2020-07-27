const db = require('../database/db')

const getAllPostBySubbreddit = async (id) => {
    const getAllPostBySubReddit =
        `
        SELECT  
        subreddit.subreddit_name, users.username,
        subreddit_posts.subreddit_posts_id, subreddit_posts.title , subreddit_posts.body  , subreddit_posts.photo_url ,
        subreddit_posts.time_post, SUM(votes_posts.votes)
        FROM subreddit_posts 
        JOIN subreddit ON subreddit.subreddit_id = subreddit_posts.subreddit_id
        JOIN users ON users.user_id = subreddit_posts.poster_id
        JOIN votes_posts ON  votes_posts.subreddit_posts_id = subreddit_posts.subreddit_posts_id
        GROUP BY subreddit.subreddit_name
        `
    return await db.any(getAllPostBySubReddit)
}



module.exports = {
    getAllPostBySubbreddit,
};