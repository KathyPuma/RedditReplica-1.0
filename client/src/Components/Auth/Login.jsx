import React from 'react'
import { useFormFields } from '../Helpers/HelperFunctions'
import FormInput from '../FormInput'

function Login({ loginUser, SetLoginAction }) {
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


                    <FormInput
                        inputLabel="Username"
                        inputName="username"
                        inputValue={loggedInUser.username}
                        updateInput={setLoggedInUser}
                        style={{ margin: '10px 0px 10px 0px', width: '95%', }}
                    />


                    <FormInput
                        inputLabel="Password"
                        inputName="password"
                        inputValue={loggedInUser.password}
                        updateInput={setLoggedInUser}
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