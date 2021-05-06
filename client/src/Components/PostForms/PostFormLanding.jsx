import React, { useState, useEffect } from 'react';
import PostNavBar from './PostNavbar';
import HiddenSideBar from '../HiddenSideBar'
import { homeStyle } from "../styling/homeStyle";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import axios from 'axios';
import "./PostFormLanding.css"
import "../Home.css"



export default function PostFormLanding(props) {

    const [subredditId, setSubredditId] = useState(null)
    const [subredditInfo, setSubbredditInfo] = useState([])
    const homeStyleTheme = homeStyle();

    useEffect(() => {
        const getSubredditId = async () => {
            try {
                const allSubreddits = await axios.get(`/api/subreddit/subredditName/${props.location.pathname.split('/')[2]}`)
                let subredditId = allSubreddits.data.payload.subreddit_id
                setSubbredditInfo(allSubreddits.data.payload)
                setSubredditId(subredditId)
            } catch (err) {
                console.log("ERROR", err)

            }

        }
        getSubredditId()
    }, [])


    return (

        <Hidden >
            <Paper className={homeStyleTheme.paper}
                style={{
                    background: "#DAE0E6", boxShadow: "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",

                }}>



                <div className="postformlanding-stage">
                    <div className={homeStyleTheme.root} >
                        <div className={homeStyleTheme.container}>

                            <div style={{
                                display: 'flex', alignItems: 'center', marginRight: '0px', borderRadius: '5px',
                            }}>

                                <PostNavBar
                                    subredditId={subredditId}
                                    setSubredditId={setSubredditId}
                                />
                            </div>



                            <HiddenSideBar
                                homeStyleTheme={homeStyleTheme}
                                banner={subredditInfo.subreddit_banner}
                                currPage="Community"
                                className="sidebar"
                                cardTitle={subredditInfo.subreddit_description}
                                cardDescription={subredditInfo.subreddit_description}
                                ButtonAction={() => (
                                    <div>

                                    </div>
                                )}

                            />

                        </div>
                    </div>


                </div >
            </Paper>
        </Hidden>
    );
}
