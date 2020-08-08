const db = require('../database/db')

const getAllPostBySubbreddit = async (id) => {

    const comments =
        `SELECT  subreddit.subreddit_name , json_agg(subreddit_posts) AS subreddit_posts
    FROM subreddit 
    JOIN subreddit_posts ON subreddit_posts.subreddit_id = subreddit.subreddit_id 
    GROUP BY subreddit.subreddit_name
    `
    return await db.any(comments)
}


const getSubbredditById = async (subreddit_id) => {
    const comments =
        `SELECT  subreddit.subreddit_name , json_agg(subreddit_posts.title) AS post
    FROM subreddit 
    JOIN subreddit_posts ON subreddit_posts.subreddit_id = subreddit.subreddit_id 
   JOIN users ON users.user_id = subreddit_posts.poster_id
   
    WHERE subreddit.subreddit_id = /subreddit_id/
    GROUP BY subreddit.subreddit_name
    `
    return await db.any(comments, subreddit_id)
}



const getSubbredditByName = async (subreddit_name) => {
    const subreddit =
        `SELECT  subreddit.subreddit_name , json_agg(subreddit_posts) AS subreddit_posts
    FROM subreddit 
    JOIN subreddit_posts ON subreddit_posts.subreddit_id = subreddit.subreddit_id 
    JOIN users ON users.user_id = subreddit_posts.poster_id
    WHERE subreddit.subreddit_name = $/subreddit_name/
    GROUP BY subreddit.subreddit_name
    `
    return await db.any(subreddit, { subreddit_name })
}

const checkIfSubbredditExist = async (subreddit_name) => {
    const subreddit =
        `SELECT * FROM subreddit 
    WHERE subreddit_name = $/subreddit_name/
    
    `
    return await db.oneOrNone(subreddit, { subreddit_name })
}



const addNewSubreddit = async (subredditObj) => {
    const newSubredditQuery = `
		INSERT INTO subreddit(subreddit_name, subreddit_description, subreddit_admin)
			VALUES($/subreddit_name/, $/subreddit_description/ , $/subreddit_admin/ )
            RETURNING *
            `
    return await db.oneOrNone(newSubredditQuery, subredditObj)
}


module.exports = {
    // getAllPostBySubbreddit,
    getSubbredditById,
    getSubbredditByName,
    addNewSubreddit,
    checkIfSubbredditExist
};