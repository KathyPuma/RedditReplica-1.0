import React from 'react';
import { Link } from 'react-router-dom';
import { homeStyle } from './styling/homeStyle'
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReddit } from '@fortawesome/free-brands-svg-icons';
import './Home.css';

function CommunityPage({ subreddit, community }) {
    const classes = homeStyle();

    return (
        <div className='community-cards '>

            {subreddit.length !== 0 ? (<div className='community-cards'>

                <div style={{
                    backgroundColor: 'white', padding: '15px', width: '36%', display: 'flex', alignItems: 'center', marginRight: '0px', borderRadius: '5px',
                }}>

                    <Link className="reddit-link" to={{ pathname: `/r/${community}/submit` }}>
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
                            style={{ borderRadius: '4px' }}

                        />
                    </Link>




                </div>
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

                                {subreddit.map(posts => {
                                    return (
                                        <div className="subreddit-card"
                                            style={{ width: '400px' }}
                                            key={posts.subreddit_posts[0].subreddit_posts_id} >
                                            <div className='home-card-container'>
                                                <div className='card-words'>



                                                    <Link to={{ pathname: `/r/${posts.subreddit_name}` }}>
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


                                                    <div>
                                                        <span className='card-title'>{posts.subreddit_posts[0].title}</span>
                                                        <h2>{posts.body}</h2>
                                                        <img className='subreddit-card-img' src={posts.subreddit_posts[0].photo_url} />
                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    )
                                })}
                            </Paper>
                        </Hidden>





                    </div>

                </div >





            </div>) : (<div></div>)}









        </div >
    )
}
export default CommunityPage;
