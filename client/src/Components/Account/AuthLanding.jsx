import React from 'react'
import Login from '../Account/Login'
import Signup from '../Account/Signup'
import RedditArtLogin from '../../redditImages/reddit_loginBanner.png'
import './AuthCSS/AuthLanding.css'

function AuthLanding({ user }) {

    return (
        <div className='authLanding-page'>
            <img className="reddit_login_art" alt="reddit-login-art" src={RedditArtLogin} />
            {user === 'login' ? (
                <div>
                    <Login />
                </div>
            ) : (
                    <div>
                        <Signup />
                    </div>
                )}
        </div>
    );


}

export default AuthLanding