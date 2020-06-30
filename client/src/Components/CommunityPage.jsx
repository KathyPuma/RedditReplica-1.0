
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CommunityPage({subreddit}) {



    return (
        <div className="community-stage" >

         {subreddit.length !== 0 ? <div>


            <p>{subreddit[0].subreddit_name}</p>

 {subreddit[0].subreddit_posts.map(posts => {
     return (
         <div className="subreddit-card">
        <div className = 'card-words'>
            </div>
           
              <span>posted by  
                  <div>  <Link to={`/user/${posts.username}`}>
              <span>
              {posts.username}
              </span>
              </Link>
                  </div>         
              </span>

         
              <span className = 'card-title'>{posts.title}</span>
           
            
             <h2>{posts.body}</h2>
             <img className = 'subreddit-card-img' src={posts.photo_url} />
            
             </div>
             )
         })} 






         </div> : <div>      <p>{subreddit.subreddit_name}</p> </div>}


        </div >
    )
}
export default CommunityPage;
