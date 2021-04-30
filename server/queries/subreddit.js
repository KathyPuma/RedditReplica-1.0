const db = require('../database/db')

const getAllSubreddits = async () => {
    const users = await db.any("SELECT * FROM subreddit")
    return users;
}

const getAllPostBySubbreddit = async (id) => {

    const comments =
        `SELECT  subreddit.subreddit_name , json_agg(subreddit_posts) AS subreddit_posts
    FROM subreddit 
    JOIN subreddit_posts ON subreddit_posts.subreddit_id = subreddit.subreddit_id 
    GROUP BY subreddit.subreddit_name
    `
    return await db.any(comments)
}


const getSubbredditOnlyByName = async (subreddit_name) => {
    const subredditByName =
        `SELECT  * FROM subreddit WHERE subreddit_name = $/subreddit_name/
    `
    return await db.any(subredditByName, {subreddit_name})
}



const getSubbredditById = async (subreddit_id) => {
    const comments =
        `SELECT  subreddit.subreddit_name , subreddit.subreddit_id, json_agg(subreddit_posts.title) AS post
    FROM subreddit 
    JOIN subreddit_posts ON subreddit_posts.subreddit_id = subreddit.subreddit_id 
   JOIN users ON users.user_id = subreddit_posts.poster_id
   
    WHERE subreddit.subreddit_id = /subreddit_id/
    GROUP BY subreddit.subreddit_name
    `
    return await db.any(comments, subreddit_id)
}



const getSubbredditByName = async (subreddit_name) => {
    const subreddit = `
    SELECT   subreddit.*,users.*, json_agg(subreddit_posts) AS subreddit_posts
    FROM subreddit 
    JOIN subreddit_posts ON subreddit_posts.subreddit_id = subreddit.subreddit_id 
    JOIN users ON users.user_id = subreddit_posts.poster_id
    WHERE subreddit.subreddit_name = $/subreddit_name/
    GROUP BY users.user_id, subreddit.subreddit_id, subreddit_posts.subreddit_posts_id
    ORDER BY subreddit_posts_id DESC
    `
    return await db.any(subreddit, { subreddit_name })
}

const checkIfSubbredditExist = async (subreddit_name) => {
    const subreddit = `
    SELECT * FROM subreddit 
    WHERE subreddit_name = $/subreddit_name/
    `
    return await db.oneOrNone(subreddit, { subreddit_name })
}


const searchSubreddit = async (subreddit_name) => {
    console.log('subreddit_name,', subreddit_name)
    const subreddit = `
    SELECT * FROM subreddit 
    WHERE subreddit_name ILIKE $/subreddit_name/`
    return await db.any(subreddit, { subreddit_name })
}





const addNewSubreddit = async (subredditObj) => {
    const newSubredditQuery = `
		INSERT INTO subreddit(subreddit_name, subreddit_description, subreddit_admin, subreddit_banner,subreddit_logo )
		VALUES($/subreddit_name/, $/subreddit_description/ , $/subreddit_admin/, $/subreddit_banner/ ,$/subreddit_logo/ )
        RETURNING *
        `
    return await db.oneOrNone(newSubredditQuery, subredditObj)
}


module.exports = {
    getSubbredditOnlyByName,
    getAllSubreddits,
    getAllPostBySubbreddit,
    getSubbredditById,
    getSubbredditByName,
    addNewSubreddit,
    checkIfSubbredditExist,
    searchSubreddit,
};