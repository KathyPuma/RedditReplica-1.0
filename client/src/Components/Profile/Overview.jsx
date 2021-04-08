import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Overview(props) {

    // console.log(props.match.params.username)

    // useEffect(() => {
    //   const handleUserProfile = async () => {
    //     const allSubreddits = await axios.get(`/subreddit`)
    //     setSubredditsPosts(allSubreddits.data.payload)
    //     console.log("allSubreddits.data.payload", allSubreddits.data.payload)
    //   }
    //   handleUserProfile()
    // }, [])



    return (
        <div className="overview-stage"  >
        </div >
    )
}
export default Overview;