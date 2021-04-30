import React, { useState, useEffect } from "react";
import CommunityErrorPage from "./Error/CommunityErrorPage";
import HiddenSideBar from './HiddenSideBar';
import { homeStyle } from "./styling/homeStyle";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReddit } from '@fortawesome/free-brands-svg-icons';
import PostDisplayed from './PostDisplayed';
import Divider from "@material-ui/core/Divider";
import axios from "axios";
import "./Community.css";
import './Home.css';




function Community(props) {
    const [subredditPosts, setSubredditPosts] = useState([])
    const [subreddit, setSubreddit] = useState(null)
    const homeStyleTheme = homeStyle();

    useEffect(() => {
        const handleAllSubReddits = async () => {
            try {
                const checkIfSUbredditExist = await axios.get(`/api/subreddit/search/subredditName/${props.match.params.community}`)
                let checkIfSUbredditExistPayload = checkIfSUbredditExist.data.payload[0]

                setSubreddit(checkIfSUbredditExistPayload)
                if (checkIfSUbredditExistPayload) {
                    let allSubredditsPost = await axios.get(`/api/subreddit/name/${props.match.params.community}`)
                    let subredditPostPayload = allSubredditsPost.data.payload

                    setSubredditPosts(subredditPostPayload)
                }
            } catch (err) {
                console.log("ERROR", err)
            }
        }
        handleAllSubReddits()
    }, [])


    return (
        <div className="community-stage" >
            <div className="community-header-stage" >
            </div>
            {subreddit && subredditPosts ? (
                <div>
                    <div className="community-header">

                        <div className="community-title">

                            <div className="community-banner">
                                <img className="subreddit_banner" src={subreddit.subreddit_banner} alt="subreddit_banner" />
                            </div>
                            <div className="community-name">
                                <img className="subreddit_logo" src={subreddit.subreddit_logo} alt="subreddit_logo" />
                                <p className="subreddit" >r/{props.match.params.community}</p>
                            </div>
                        </div>
                    </div>




                    <div className={homeStyleTheme.root} >
                        <div className={homeStyleTheme.container}>

                            <div style={{
                                width: '100vw', display: 'flex', alignItems: 'center', marginRight: '0px', borderRadius: '5px',
                            }}>



                                <PostDisplayed
                                    subredditsPosts={subredditPosts}
                                    homeStyleTheme={homeStyleTheme}
                                    currPage="community"



                                    PostButton={() => (
                                        <Link className="subreddit-card" to={{ pathname: `/r/${props.match.params.community}/submit` }}
                                        >
                                            <div className="reddit-home">
                                                <FontAwesomeIcon
                                                    className='reddit-logo'
                                                    icon={faReddit}
                                                    style={{ color: ' #c5c5c5' }} />

                                            </div>
                                            <input
                                                label="body"
                                                id="body"
                                                name='body'
                                                className='input-form'
                                                type='text'


                                            />
                                        </Link>
                                    )}

                                />


                            </div>



                            <HiddenSideBar
                                homeStyleTheme={homeStyleTheme}
                                banner={subreddit.subreddit_banner}
                                currPage="Community"
                                className="sidebar"
                                cardTitle={subreddit.subreddit_description}
                                cardDescription={subreddit.subreddit_description}
                                ButtonAction={() => (
                                    <div>
                                        <Divider />
                                        <Link className="reddit-link" to={{ pathname: `/r/${props.match.params.community}/submit` }}
                                            style={{
                                                'display': 'flex',
                                                "justifyContent": "center",
                                                'padding': "15px 0px"
                                            }}>
                                            <button className="post-link"
                                            > Create Post</button>
                                        </Link>
                                    </div>
                                )}

                            />

                        </div>
                    </div>


                </div>

            ) : (<div>
                <CommunityErrorPage />
            </div>)}


        </div >
    )
}
export default Community;
