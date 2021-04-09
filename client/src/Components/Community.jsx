import React, { useState, useEffect } from 'react';
import CommunityPage from './CommunityPage';
import CommunityErrorPage from './Error/CommunityErrorPage';
import axios from 'axios';



function Community(props) {
    const [subreddit, setSubreddit] = useState([]);
    const [communityName, setCommunityName] = useState("")

    useEffect(() => {
        const handleAllSubReddits = async () => {
            try {
                const allSubreddits = await axios.get(`/api/subreddit/name/${props.match.params.community}`)
                let subredditPayload = allSubreddits.data.payload
                setSubreddit(subredditPayload)
                setCommunityName(props.match.params.community)
            } catch (err) {
                console.log("ERROR", err)
       
            }
        }
        handleAllSubReddits()
    }, [])


    return (
        <div className="community-stage" >


            {communityName !== null ? (<div>
                <div className='community-banner'>
                    <p>{communityName}</p>

                </div>

                <CommunityPage
                    subreddit={subreddit}
                    community={communityName}
                /></div>) : (<div>
                    <CommunityErrorPage />
                </div>)}


        </div >
    )
}
export default Community;
