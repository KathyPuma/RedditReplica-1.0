import React from 'react'
import { CssTextField, useStyles } from '../styling/InputStyling'
import { useFormFields } from '../Helpers/HelperFunctions'

function Login({ loginUser, SetLoginAction }) {
    const classes = useStyles();
    const [loggedInUser, setLoggedInUser] = useFormFields({
        username: "",
        password: "",
    });

    const handleLogin = () => {
        loginUser(loggedInUser)
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
                        value={loggedInUser.username}
                        onChange={setLoggedInUser}
                        style={{ margin: '10px 0px 10px 0px', width: '95%', }}
                    />

                    <CssTextField
                        className={classes.margin}
                        label="Password"
                        variant="outlined"
                        id="password"
                        type="password"
                        value={loggedInUser.password}
                        onChange={setLoggedInUser}


                        style={{ margin: '10px 0px 10px 0px', width: '95%', }}
                    />

                    <div >
                        <button className='login-button-form'
                            onClick={handleLogin}
                        >LOG IN</button>
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