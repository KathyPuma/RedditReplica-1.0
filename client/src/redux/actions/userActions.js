import axios from 'axios'
import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL
} from '../actions/actionTypes'


export const registerUser = (user) => {
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


export const loginUser = (user) => {

    return (dispatch) => {
        dispatch({
            type: LOGIN_REQUEST
        })
        axios
            .post('/auth/login', user)
            .then(response => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: LOGIN_FAIL,
                    payload: error.response.data.message
                })
            })
    }
}


export const logoutUser = () => {

    return (dispatch) => {
        axios
            .get('/auth/logout')
            .then(response => {
                dispatch({
                    type: LOGOUT_SUCCESS,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: LOGOUT_FAIL,
                    payload: error.response.data.message
                })
            })
    }
}