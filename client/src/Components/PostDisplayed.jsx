import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import "./Home.css";

function PostDisplayed({ homeStyleTheme, subredditsPosts, PostButton, currPage, userId, handleAllSubRedditPosts }) {

    const handleVote = async (postId, vote) => {
        if (userId) {
            const allSubreddits = await axios.post(`/api//votes/updateVote`, { subreddit_posts_id: postId, voter_id: userId, votes: vote })
            handleAllSubRedditPosts()
        }
    }


    return (
        <Hidden >
            <Paper className={homeStyleTheme.paper}
                style={{
                    background: "#DAE0E6", boxShadow: "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "50%"
                }}>

                {currPage === "community" ? (<PostButton />) : (<></>)}
                {subredditsPosts.map(posts => {
                    return (
                        <div className="subreddit-card" key={posts.subreddit_posts_id}>
                            <div className="home-card-container">
                                <div className="card-words">


                                    <Link to={`/r/${posts.subreddit_name}`}>
                                        <span>r/{posts.subreddit_name} </span>
                                    </Link>
                                    <span>posted by
                         <div>  <Link to={`/user/${posts.username}`}>
                                            <span>
                                                {posts.username}
                                            </span>
                                        </Link>
                                        </div>
                                    </span>

                                    <span className="card-title">{posts.title}</span>
                                    <h2 className="card-body">{posts.body}</h2>
                                    <img className="subreddit-card-img" src={posts.photo_url} />
                                </div>


                                <div className="arrow-buttons">


                                    <button className="vote-button" onClick={() => { handleVote(posts.subreddit_posts_id, 1) }} >
                                        <ArrowUpwardIcon />
                                    </button>

                                    {posts.vote_total === null ? <div> .</div> : <div>{posts.vote_total}</div>}
                                    <button className="vote-button" onClick={() => { handleVote(posts.subreddit_posts_id, -1) }} >
                                        <ArrowDownwardIcon />
                                    </button>
                                </div>
                            </div>

                        </div>
                    )
                })}

            </Paper>
        </Hidden>

    )
}

export default PostDisplayed;