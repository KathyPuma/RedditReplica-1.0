import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css'

function Home(props) {
  const [subredditsPosts, setSubredditsPosts] = useState([]);

  useEffect(() => {
    const handleAllSubReddits = async () => {
      const allSubreddits = await axios.get(`/subreddit`)
      setSubredditsPosts(allSubreddits.data.payload)
      console.log("allSubreddits.data.payload", allSubreddits.data.payload)
    }
    handleAllSubReddits()
  }, [])



  return (
    <div className="home-stage"  >
      {subredditsPosts.map(posts => {
        return (
          <div className="subreddit-card">
            <div className='card-words'>

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
            </div>


            <span className='card-title'>{posts.title}</span>
            <h2>{posts.body}</h2>
            <img className='subreddit-card-img' src={posts.photo_url} />

          </div>
        )
      })}



    </div >
  )
}

export default Home;


