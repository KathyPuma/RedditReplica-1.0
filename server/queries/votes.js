const db = require('../database/db')

const updateVote = async (userObj, updateObj) => {
    let getVote = await getVoteFromPost(userObj)

    if (getVote) {
        if (getVote.votes === updateObj.votes) {
            updateObj.votes = 0
        }
        const getQuery = `
        UPDATE votes_posts
        SET 
        votes = $/votes/
        WHERE subreddit_posts_id = $/subreddit_posts_id/ AND 
        voter_id = $/voter_id/ 
        RETURNING *
        `;
        return await db.one(getQuery, updateObj);

    } else {

        const updateVoteQuery = `
        INSERT INTO votes_posts(subreddit_posts_id, voter_id, votes)
		VALUES($/subreddit_posts_id/, $/voter_id/ , $/votes/ )
        RETURNING *
        `
        return await db.one(updateVoteQuery, updateObj);
    }
}

const getVoteFromPost = async (obj) => {
    const getQuery = `
	SELECT *
	FROM votes_posts
    WHERE subreddit_posts_id = $/subreddit_posts_id/ AND 
    voter_id = $/voter_id/;
    `;
    return await db.oneOrNone(getQuery, obj);
};




module.exports = {
    updateVote
};

