import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/actionTypes'

const initialState = {
    loggedIn: false,
    user: [],
    message: ''
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                ...state,
            }
        case REGISTER_SUCCESS:
            return {
                loggedIn: true,
                user: action.payload.payload,
                message: action.payload.message

            }
        case REGISTER_FAIL:
            return {
                loggedIn: false,
                user: [],
                message: action.payload

            }
        default: return state
    }
}

export default userReducer



