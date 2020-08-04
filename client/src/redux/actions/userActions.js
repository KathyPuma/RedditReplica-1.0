import axios from 'axios'
import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/actionTypes'

export const registerUser = (user) => {
    console.log("USERS ACTIONS", user)
    return (dispatch) => {
        dispatch({
            type: REGISTER_REQUEST
        })
        axios
            .post('/auth/signup', user)
            .then(response => {
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: REGISTER_FAIL,
                    payload: error.response.data.message
                })
            })
    }
}