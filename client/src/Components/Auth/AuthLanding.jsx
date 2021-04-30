import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import { connect } from 'react-redux';
import { registerUser, loginUser } from '../../redux/actions/userActions';
import RedditArtLogin from '../../redditImages/reddit_loginBanner.png';
import './AuthCSS/AuthLanding.css';

function AuthLanding({ button, registerUser, loginUser, message }) {
    const [loginAction, SetLoginAction] = useState(button)


    return (
        <div className='authLanding-page'>
            <img className="reddit_login_art" alt="reddit-login-art" src={RedditArtLogin} />

            {loginAction === 'Login' ? (
                <div>
                    <Login
                        loginUser={loginUser}
                        SetLoginAction={SetLoginAction}
                        message={message}
                    />

                </div>
            ) : (
                    <div>
                        <Signup
                            registerUser={registerUser}
                            SetLoginAction={SetLoginAction}
                            message={message}
                        />
                    </div>
                )}
        </div>
    );


}

const mapStateToProps = state => {
    return {
        user: state.user,
        message: state.user.message
    }
}

const mapDispatchToProps = dispatch => {
    return {
        registerUser: (user) => dispatch(registerUser(user)),
        loginUser: (user) => dispatch(loginUser(user))
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthLanding)
