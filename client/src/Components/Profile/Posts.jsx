import React, { useEffect, useState } from "react";
import { homeStyle } from "../styling/homeStyle";
import { Paper, makeStyles, Grid, Avatar, Typography, Hidden } from "@material-ui/core/";
import ChatIcon from "@material-ui/icons/Chat";
import ProfileError from "../Error/ProfileError";
import EmptyProfile from "./EmptyProfile";
import axios from "axios";


const cardTheme = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: "hidden",
        width: "100%"
    },
    paper: {
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
        width: "100%",
        display: "flex",
        textAlign: "start",
    },
}));


function Posts({ username }) {
    const cardStyles = cardTheme()
    const [allPostsByUser, setAllPostsByUser] = useState([])
    const homeStyleTheme = homeStyle();

    useEffect(() => {
        const getAllPostsByUsername = async () => {
            try {
                const postsByUser = await axios.get(`/api/subredditPosts/allPosts/${username}`)
                setAllPostsByUser(postsByUser.data.payload)
                console.log("postsByUser.data.payload.subreddit_id", postsByUser.data.payload)
            } catch (err) {
                console.log("ERROR", err)

            }
        }
        getAllPostsByUsername()
    }, [])



    return (
        <div className="posts-stage"  >

            {allPostsByUser ? (<Hidden >
                <Paper className={homeStyleTheme.paper}
                    style={{
                        background: "#DAE0E6", boxShadow: "none",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "50%"
                    }}>

                    {allPostsByUser.length !== 0 ?
                        (<div>{allPostsByUser.map(post => {
                            return (
                                <div className={cardStyles.root}>

                                    <p>empty</p>
                                    <Paper className={cardStyles.paper}>
                                        <Grid container wrap="nowrap" spacing={2}>
                                            <Grid item>
                                                {post.photo_url ? (
                                                    <div>
                                                        <Avatar alt={post.title} src={post.photo_url} />
                                                    </div>
                                                ) : (
                                                        <div>
                                                            <Avatar alt={post.title} >
                                                                <ChatIcon />
                                                            </Avatar>
                                                        </div>
                                                    )}

                                            </Grid>
                                            <Grid item xs>
                                                <Typography>{post.title}</Typography>
                                                <Typography>r/{post.subreddit_name} Posted by u/{post.username}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </div>)

                        })}</div>) :
                        (<EmptyProfile
                        username = {username} />)}
                </Paper>
            </Hidden>)
                : (<ProfileError />)}



        </div >
    )
}
export default Posts;
