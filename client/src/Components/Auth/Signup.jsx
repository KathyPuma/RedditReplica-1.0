import React, { useState } from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../../redux/actions/userActions'
import Stepper from '../MaterialUiComponents/Stepper'


function Signup({ user, registerUser }) {
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
)(Signup)

