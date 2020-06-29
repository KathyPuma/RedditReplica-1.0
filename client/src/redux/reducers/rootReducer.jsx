import { combineReducers } from 'redux'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  state: userReducer,
})

export default rootReducer;