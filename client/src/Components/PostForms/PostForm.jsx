import React , {useState} from 'react';
import { useHistory } from 'react-router-dom'
import { useFormFields } from '../Helpers/HelperFunctions';
import axios from 'axios';
import store from '../../redux/store/store';
import './PostForm.css';


function PostForm({ subredditId }, props ) {
    const state = store.getState();
    const history = useHistory()
    const [createPost, setCreatePost] = useFormFields({
        subredditId: subredditId,
        poster_id: state.user.user.user_id,
        title: '',
        body: '',
        photo_url: null,
    });

    const createNewPost = async () => {
        try {
            await axios.post(`/api/comments/addPost`, { subreddit_id: subredditId, poster_id: createPost.poster_id, title: createPost.title, body: createPost.body, photo_url: createPost.photo_url })
            history.push('/')
        } catch (err) {
            console.log("ERROR", err.response)
        }
    }


    return (
        <div className='post-form-stage' style={{ paddingTop: '15px' }} >
            <div style={{
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <input

                    label="title"
                    id="title"
                    name='title'
                    type='text'
                    className="postForm-title"
                    value={createPost.title}
                    onChange={setCreatePost}
                    placeholder='Title'
       
                />

                <input
                    label="body"
                    id="body"
                    name='body'
                    className='postForm-body'
                    type='text'
                    placeholder='Text (optional)'
                    value={createPost.body}
                    onChange={setCreatePost}               
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