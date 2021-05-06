const db = require('../database/db')

const getAllPostBySubbreddit = async () => {
    const getAllPostBySubReddit = `
    SELECT  subreddit_posts.*,
    subreddit.*, users.username,
    subreddit_posts.subreddit_posts_id, subreddit_posts.title , subreddit_posts.body  , subreddit_posts.photo_url ,
    subreddit_posts.time_post, sum(votes_posts.votes) AS vote_total
    FROM subreddit_posts 
    JOIN subreddit ON subreddit.subreddit_id = subreddit_posts.subreddit_id
    JOIN users ON users.user_id = subreddit_posts.poster_id
    FULL JOIN votes_posts ON  votes_posts.subreddit_posts_id = subreddit_posts.subreddit_posts_id
    GROUP BY subreddit.subreddit_id,users.username,subreddit_posts.subreddit_posts_id,
    votes_posts.votes
    ORDER BY subreddit_posts.subreddit_posts_id DESC;
    `
    return await db.any(getAllPostBySubReddit)
}

const getSubbredditByName = async (subreddit_name) => {
    const getAllPostBySubReddit = `
    SELECT  
    subreddit.*, users.username,
    subreddit_posts.subreddit_posts_id, subreddit_posts.title , subreddit_posts.body  , subreddit_posts.photo_url ,
    subreddit_posts.time_post, sum(votes_posts.votes) AS vote_total
    FROM subreddit_posts 
    JOIN subreddit ON subreddit.subreddit_id = subreddit_posts.subreddit_id
    JOIN users ON users.user_id = subreddit_posts.poster_id
    FULL JOIN votes_posts ON  votes_posts.subreddit_posts_id = subreddit_posts.subreddit_posts_id
    WHERE subreddit.subreddit_name = $/subreddit_name/
    GROUP BY subreddit.subreddit_id,users.username,subreddit_posts.subreddit_posts_id,
    votes_posts.votes
    ORDER BY subreddit_posts.subreddit_posts_id DESC;
    `
    return await db.any(getAllPostBySubReddit, {subreddit_name})
}




const getAllPostsByUsername = async(username) => {
    let checkUserExist =  await checkIfUserExist(username)
 
   
  if(checkUserExist){
    const getallPostsByUser = `
	SELECT *
    FROM subreddit_posts
    JOIN users ON users.user_id = subreddit_posts.poster_id
    JOIN subreddit ON subreddit.subreddit_id = subreddit_posts.subreddit_id
	WHERE users.username = $/username/;	
	`;
    return await await db.any(getallPostsByUser, { username })
  }else{
      return null
  }
   

}

const checkIfUserExist = async (username) =>{

const checkUser = `
	SELECT *
    FROM   users 
	WHERE users.username = $/username/	
	`;
    return await db.oneOrNone(checkUser, { username })
}








module.exports = {
    getAllPostBySubbreddit,
    getSubbredditByName,
    getAllPostsByUsername
};