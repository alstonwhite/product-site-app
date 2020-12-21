import { createStore } from 'redux'
import rootReducer from './reducers/cart'


export default createStore(rootReducer, {cart: JSON.parse(document.cookie)});

// createStore param for initial state