import React, { useState } from 'react'
import { CssTextField, useStyles } from '../styling/InputStyling'

function Login({ button, loginUser, SetLoginAction }) {
    const classes = useStyles();
    const [loggedInUser, setLoggedInUser] = useState({
        username: '',
        password: ''

    })

    const handleLogin = () => {
        loginUser(loggedInUser)
    }

    const handleOnChange = (e) => {
        let name = e.target.name
        let usernameInput = e.target.value

        setLoggedInUser(prevState => {
            return { ...prevState, [name]: usernameInput }
        })

    }



    return (
        <div className='loginPage'>

            <div className='login-stage'>
                <div className='login-form'>
                    <div className='login'>LOGIN</div>


                    <CssTextField
                        className={classes.margin}
                        label="Username"
                        variant="outlined"
                        id="username"
                        name='username'
                        onChange={handleOnChange}
                        style={{ margin: '10px 0px 10px 0px', width: '95%', }}
                    />

                    <CssTextField
                        className={classes.margin}
                        label="Password"
                        variant="outlined"
                        id="password"
                        type="password"
                        onChange={handleOnChange}
                        style={{ margin: '10px 0px 10px 0px', width: '95%', }}
                    />

                    <div >
                        <button className='login-button-form'
                            onClick={handleLogin}
                        >Login</button>
                    </div>


                    <div className='signup-link'>
                        New to Reddit?
                        <span className='su-link' onClick={() => SetLoginAction('SignUp')}>SIGN UP</span>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Login