import React from 'react'
import { CssTextField, useStyles } from '../styling/InputStyling'



function SignupStep1({ handleOnChange }) {
    const classes = useStyles();
    return (
        <div className='signupStep1Page'>
            <h1>Sign up</h1>

            <CssTextField
                className={classes.margin}
                label="Email"
                variant="outlined"
                id="email"
                name='email'
                onChange={handleOnChange}
                style={{ margin: '0px', width: '100%', }}
            />

        </div>
    );
}

export default SignupStep1