import React, { useState } from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../../redux/actions/userActions'


function Signup({ user, registerUser }) {
    const [newUser, setNewUser] = useState({
        username: '',
        email: '',
        password: '',
        avatar_url: '',
    })

    const handleRegister = () => {
        registerUser(newUser)
    }

    return (
        <div className='signupPage'>

            <div className='signup-stage'>
                <div className={'singup-button'}>
                    <div className='register'>Register</div>


                    <div className='username-div'>
                        <input
                            className='username-input'
                            type='text' name='username'
                            id='username'
                            placeholder='Username'
                            onChange={e => {
                                let usernameInput = e.target.value
                                setNewUser(prevState => {
                                    return { ...prevState, username: usernameInput }
                                })
                            }}
                        />
                    </div>

                    <div className='email-div'>
                        <input
                            className='email-input'
                            type='email'
                            name='email'
                            id='email'
                            placeholder='Email'
                            onChange={e => {
                                let emailInput = e.target.value
                                setNewUser(prevState => {
                                    return { ...prevState, email: emailInput }
                                })
                            }}
                        />
                    </div>

                    <div className='password-div'>
                        <input
                            className='password-input'
                            type='password'
                            name='password'
                            id='password'
                            placeholder='Password'
                            onChange={e => {
                                let passwordInput = e.target.value
                                setNewUser(prevState => {
                                    return { ...prevState, password: passwordInput }
                                })
                            }}
                        />
                    </div>


                    <div className='buttons'>
                        <div className='btn'>
                            <button
                                onClick={handleRegister}
                            >Sign Up</button>
                        </div>
                        <div className='btn'>
                            <button
                            // onClick={}

                            >Return</button>
                        </div>
                    </div>


                </div>
            </div>
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
)(Signup)