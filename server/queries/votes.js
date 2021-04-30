const db = require('../database/db')

const updateVote = async (userObj, updateObj) => {

    let getVote = await getVoteFromPost(userObj)
  
    let checkNumOfVotes = await getCurrentVotesOfPost(userObj.subreddit_posts_id)
    
   
    if (getVote) {
     
        if (getVote.votes === updateObj.votes) {
            let resetNumber =  Number(updateObj.votes) * Number(-1)
            updateObj.votes = updatedSum(checkNumOfVotes, resetNumber)
        }else{
            updateObj.votes = updatedSum(checkNumOfVotes, updateObj.votes)  
        }
      

    const updateVote = `
        UPDATE votes_posts
        SET 
        votes = $/votes/
        WHERE subreddit_posts_id = $/subreddit_posts_id/ AND 
        voter_id = $/voter_id/ 
        RETURNING *
        `;

    return await db.one(updateVote, updateObj);
    
    }else {

    const insertVote = ` 
        INSERT INTO votes_posts(subreddit_posts_id, voter_id, votes)
		VALUES($/subreddit_posts_id/, $/voter_id/ , $/votes/ )
        RETURNING *
        `
    return await db.one(insertVote, updateObj);
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

const getCurrentVotesOfPost = async (subreddit_posts_id) =>{
    const getQuery = `
	SELECT SUM(votes_posts.votes)
	FROM votes_posts
    WHERE subreddit_posts_id = $/subreddit_posts_id/
    `;
    return await db.any(getQuery, {subreddit_posts_id});
}

const updatedSum = (numOfVotesOfPost, newVote ) =>{
        return  Number(numOfVotesOfPost[0].sum) + Number(newVote)
}

module.exports = {
    updateVote
};

