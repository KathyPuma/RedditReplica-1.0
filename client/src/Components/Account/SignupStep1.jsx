

import React from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../../redux/actions/userActions'
import { CssTextField, useStyles } from '../styling/buttonStyling'



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
                style={{margin:'0px',  width: '100%',}}
            />

        </div>
    );


}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        registerUser: (user) => dispatch(registerUser(user))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupStep1)