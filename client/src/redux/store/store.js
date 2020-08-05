import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk'

const saveToLocalStorage = (store) => {

  try {
    const serializedState = JSON.stringify(store)
    localStorage.setItem('store', serializedState)
  } catch (err) {
    console.log("ERROR", err)
  }

}


const loadFromLocalStorage = () => {

  try {
    const serializedState = localStorage.getItem('store')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    console.log("ERROR", err)
    return undefined
  }

}

const persistedState = loadFromLocalStorage()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancer(applyMiddleware(thunk)),
);

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store;