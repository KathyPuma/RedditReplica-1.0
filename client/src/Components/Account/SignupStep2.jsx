import React from 'react'
import { CssTextField, useStyles } from '../styling/InputStyling'
import Divider from '@material-ui/core/Divider';



function SignupStep2({ handleOnChange }) {
    const classes = useStyles();

    return (
        <div className='signupStep2Page'>
            <h1>Choose your username</h1>
            <h3>Your username is how other community memebers will see you. This name will be used to credit you for things you share on Reddit. What should we call you?</h3>

            <Divider />

            <div className='singup-button'>

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
                    name='password'
                    onChange={handleOnChange}
                    style={{ margin: '10px 0px 10px 0px', width: '95%', }}
                />
            </div>

            <Divider />
            
        </div>
    );


}

export default SignupStep2