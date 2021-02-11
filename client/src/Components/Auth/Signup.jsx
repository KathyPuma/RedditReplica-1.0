import React, { useState } from 'react'
import Stepper from '../MaterialUiComponents/Stepper'


function Signup({ button, registerUser, SetLoginAction }) {
    const [newUser, setNewUser] = useState({
        username: '',
        email: '',
        password: '',
        avatar_url: '',
    })

    const handleRegister = () => {
        if (newUser.username && newUser.email && newUser.password) {
            registerUser(newUser)
        }
    }

    const handleOnChange = (e) => {
        let name = e.target.name
        let usernameInput = e.target.value

        setNewUser(prevState => {
            return { ...prevState, [name]: usernameInput }
        })

    }

    return (
        <div className='signupPage'>
            <Stepper
                handleOnChange={handleOnChange}
                handleRegister={handleRegister}
                SetLoginAction={SetLoginAction}
            />
        </div>
    );


}



export default Signup