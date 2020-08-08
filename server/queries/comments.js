const db = require('../database/db')

const addPost = async (obj) => {
    const createPost = `
    INSERT INTO subreddit_posts(subreddit_id, poster_id, title,body,photo_url)
	VALUES($/subreddit_id/, $/poster_id/ , $/title/, $/body/ , $/photo_url/  )
    RETURNING *
    `
    return await db.any(createPost, obj)
}


module.exports = {
    addPost
};


