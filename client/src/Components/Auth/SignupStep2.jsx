import React from "react";
import FormInput from "../FormInput"
import Divider from "@material-ui/core/Divider";

function SignupStep2({ setNewUser, newUser }) {
    return (
        <div className="signupStep2Page">
            <h1 className="step2-title">Choose your username</h1>
            <p className="step2-description">Your username is how other community memebers will see you. This name will be used to credit you for things you share on Reddit. What should we call you?</p>

            <Divider />

            <div className="singup-button">

                <FormInput
                    inputLabel="Username"
                    inputName="username"
                    inputType="text"
                    inputValue={newUser.username}
                    updateInput={setNewUser}
                    style={{ margin: "10px 0px 10px 0px", width: "95%", }}
                />

                <FormInput
                    inputLabel="Password"
                    inputName="password"
                    inputType="password"
                    inputValue={newUser.password}
                    updateInput={setNewUser}
                    style={{ margin: "10px 0px 10px 0px", width: "95%", }}
                />


            </div>

            <Divider />
        </div>
    );


}

export default SignupStep2