import React, { useState, useEffect } from 'react';
import Divider from '@material-ui/core/Divider';
import axios from 'axios';
import store from '../../redux/store/store'
import './PostForm.css'


function PostForm({commuityId}) {
    const state = store.getState();

    const [createPost, setCreatePost] = useState({
        commuityId: commuityId,
        poster_id: state.user.user.user_id,
        title: '',
        body: '',
        photo_url: null,
    })

    const createNewPost = async () => {
        try {
            await axios.post(`/api/comments/addPost`, { subreddit_id: commuityId, poster_id: createPost.poster_id, title: createPost.title, body: createPost.body, photo_url: createPost.photo_url })
        } catch (err) {
            console.log("ERROR", err)
        }
    }

    const handleOnChange = (e) => {
        let name = e.target.name
        let usernameInput = e.target.value

        setCreatePost(prevState => {
            return { ...prevState, [name]: usernameInput }
        })
    }


    return (
        <div className='post-form-stage' style={{ paddingTop: '15px' }} >
            <Divider style={{ backgroundColor: 'white', marginTop: '15px', marginBottom: '15px' }} />
            <div style={{
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'column',
                width: '50%',
                padding: '10%',
            }}>
                <input

                    label="title"
                    id="title"
                    name='title'
                    type='text'
                    className="title-form"
                    onChange={handleOnChange}
                    placeholder='Title'
                    style={{ marginTop: '25px', }}
                />

                <input
                    label="body"
                    id="body"
                    name='body'
                    className='input-form'
                    type='text'
                    placeholder='Text (optional)'
                    onChange={handleOnChange}
                    style={{ marginTop: '25px', height: '25%' }}
                />

                <button
                    className='submit-post-form'
                    disabled={createPost.title ? false : true}
                    onClick={createNewPost}>
                    POST
                    </button>
            </div>

        </div >
    )
}

export default PostForm;