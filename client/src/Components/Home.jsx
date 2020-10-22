import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { homeStyle } from './styling/homeStyle'
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import homeBanner from '../redditImages/reddit__homeBanner.png'
import FormButton from './MaterialUiComponents/FormButton'
import store from '../redux/store/store'
import './Home.css'

function Home() {
  const state = store.getState();

  const [subredditsPosts, setSubredditsPosts] = useState([]);
  const classes = homeStyle();

  useEffect(() => {
    handleAllSubReddits()
  }, [])

  const handleAllSubReddits = async () => {
    const allSubreddits = await axios.get(`/api/subreddit`)
    setSubredditsPosts(allSubreddits.data.payload)
  }



  const handleVote = async (postId, vote) => {

    if (state.user.user.user_id) {
      const allSubreddits = await axios.post(`/api//votes/updateVote`, { subreddit_posts_id: postId, voter_id: state.user.user.user_id, votes: vote })
      handleAllSubReddits()
    } 

  }


  return (
    <div className={classes.root} >
      <div className={classes.container}>

        <Hidden >
          <Paper className={classes.paper}
            style={{
              background: '#DAE0E6', boxShadow: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '50%'
            }}>

            {subredditsPosts.map(posts => {
              return (
                <div className="subreddit-card" key={posts.subreddit_posts_id}>
                  <div className='home-card-container'>
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

                      <span className='card-title'>{posts.title}</span>
                      <h2>{posts.body}</h2>
                      <img className='subreddit-card-img' src={posts.photo_url} />
                    </div>


                    <div className='arrow-buttons'>


                      <button className='vote-button' onClick={() => { handleVote(posts.subreddit_posts_id, 1) }} >
                        <ArrowUpwardIcon />
                      </button>

                      {posts.vote_total === null ? <div> .</div> : <div>{posts.vote_total}</div>}
                      <button className='vote-button' onClick={() => { handleVote(posts.subreddit_posts_id, -1) }} >


                        <ArrowDownwardIcon />
                      </button>
                    </div>
                  </div>

                </div>
              )
            })}
          </Paper>
        </Hidden>

        {state.user.loggedIn ? (<div>

          <Hidden smDown >
            <Paper className={classes.paper}
              style={{ background: '#DAE0E6', boxShadow: 'none', display: 'inline', padding: '12px' }}>

              <div className="subreddit-card-home">
                <div className='card-banner'>
                  <img alt='reddit-banner' src={homeBanner} className='home-banner' />
                </div>

                <div className='card-create-button'>
                  <div className='community-title-div'>
                    <span className="create-community-card"


                    ></span>
                    <span className="create-community-card-title">Home</span>

                  </div>
                  <span className='card-title-span'>Your personal Reddit frontpage. Come here to check in with your favorite communities.</span>
                  <div>

                    <div className='formbutton'>

                      <FormButton
                        user={state.user} />
                    </div>

                  </div>
                </div>
              </div>
            </Paper>
          </Hidden></div>)
          : (<></>)}

      </div>

    </div >
  )
}

export default Home;

