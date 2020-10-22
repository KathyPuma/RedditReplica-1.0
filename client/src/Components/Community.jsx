import React, { useState, useEffect } from 'react';
import CommunityPage from './CommunityPage'
import axios from 'axios';



function Community(props) {
    const [subreddit, setSubreddit] = useState([]);

    useEffect(() => {
        const handleAllSubReddits = async () => {
            const allSubreddits = await axios.get(`/api/subreddit/name/${props.match.params.community}`)
            setSubreddit(allSubreddits.data.payload)
        }
        handleAllSubReddits()
    }, [])


    return (
        <div className="community-stage" >

            <CommunityPage
                subreddit={subreddit}
                community={props.match.params.community}
            />

        </div >
    )
}
export default Community;
