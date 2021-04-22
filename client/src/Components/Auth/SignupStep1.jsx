import React from 'react';
import FormInput from '../FormInput'

function SignupStep1({ setNewUser, newUser }) {
    return (
        <div className='signupStep1Page'>
            <h1>Sign up</h1>

            <FormInput
                inputLabel="Email"
                inputName="email"
                inputValue={newUser.email}
                updateInput={setNewUser}
                style={{ margin: '0px', width: '100%', }}
            />


        </div>
    );
}

export default SignupStep1