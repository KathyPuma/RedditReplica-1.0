import React from 'react';
import Stepper from '../MaterialUiComponents/Stepper';
import { useFormFields } from '../Helpers/HelperFunctions';


function Signup({ registerUser, SetLoginAction }) {
    const [newUser, setNewUser] = useFormFields({
        username: '',
        email: '',
        password: '',
        avatar_url: '',
    });

    const handleRegister = () => {
        if (newUser.username && newUser.email && newUser.password) {
            registerUser(newUser)
        }
    }
    return (
        <div className='signupPage'>
            <Stepper
                setNewUser={setNewUser}
                newUser={newUser}
                handleRegister={handleRegister}
                SetLoginAction={SetLoginAction}

            />
        </div>
    );

}


export default Signup