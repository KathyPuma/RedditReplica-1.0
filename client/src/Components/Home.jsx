import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { homeStyle } from './styling/homeStyle'
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import homeBanner from '../redditImages/reddit__homeBanner.png'
import './Home.css'



function Home(props) {
  const [subredditsPosts, setSubredditsPosts] = useState([]);
  const classes = homeStyle();
  useEffect(() => {
    const handleAllSubReddits = async () => {
      const allSubreddits = await axios.get(`/subreddit`)
      setSubredditsPosts(allSubreddits.data.payload)
    }
    handleAllSubReddits()
  }, [])


  return (
    <div className={classes.root} >
      <div className={classes.container}>

        <Hidden >
          <Paper className={classes.paper}
            style={{ background: '#DAE0E6', boxShadow: 'none' }}>

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

                  <div>
                    <button>
                      <ArrowUpwardIcon />
                    </button>

                    {posts.vote_total === null ? <div> .</div> : <div>{posts.vote_total}</div>}
                    <button>
                      <ArrowDownwardIcon />
                    </button>

                  </div>

                </div>
              )
            })}
          </Paper>
        </Hidden>
      </div>

    </div >
  )
}

export default Home;

