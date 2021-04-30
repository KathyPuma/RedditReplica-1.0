import React, { useState } from 'react';
import axios from 'axios';
import Divider from '@material-ui/core/Divider';
import communityImg from '../redditImages/reddit_createCommunity.jpg';
import { useFormFields } from './Helpers/HelperFunctions';
import './CommunityForm.css';

function CommunityForm({ user, handleClose }) {
    const [createCommunity, setCreateCommunity] = useFormFields({
        name: "",
        description: ""
    });
    const [communityErrResponse, setCommunityErrResponse] = useState(null)

    const createNewCommunity = async () => {
        try {
            await axios.post(`/api/subreddit/add`, { subreddit_name: createCommunity.name, subreddit_description: createCommunity.description, subreddit_admin: user.user.user_id })
            setCommunityErrResponse(null)
            handleClose()
        } catch (err) {
            setCommunityErrResponse(err.response.data.message)
        }
    }

    return (

        <div className='community-form-stage'>
            <div>
                <img className='community-image' src={communityImg} alt='create-community-banner' />
            </div>
            <div className='community-form'>
                <span className='form-header'>Create a community</span>

                <Divider style={{ marginTop: '17px' }} />
                <label
                    className='label'
                    htmlFor='name'>

                    Name <span className='asterisk'>*</span>

                </label><span className='label-descript'>Community names including capitalization cannot be changed.</span>
                <input

                    label="name"
                    id="name"
                    name='name'
                    type='text'
                    className="input-form"
                    value={createCommunity.name}
                    onChange={setCreateCommunity}
                />


                <label
                    className='label'
                    htmlFor='description'>
                    Description
                    <span className='asterisk'>*</span>


                </label><span className='label-descript'>This is how new members come to understand your community.
                    </span>
                <input
                    label="description"
                    id="description"
                    name='description'
                    className='input-form'
                    value={createCommunity.description}
                    onChange={setCreateCommunity}
                />

                <button
                    className='submit-community-form'
                    disabled={createCommunity.name && createCommunity.description ? false : true}
                    onClick={createNewCommunity}>
                    Create Community
            </button>
                {communityErrResponse}
            </div>
        </div>
    )
}


export default CommunityForm