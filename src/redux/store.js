import { createStore } from 'redux'
import rootReducer from './reducers/cart'
import { loadCartState, saveCartState } from '../cookies';

const persistedState = loadCartState();

const store = createStore(
  rootReducer,
  persistedState
);

store.subscribe(() => {
  saveCartState({
    cart: store.getState().cart
  });
});


export default store;

// export default createStore(rootReducer, {cart: JSON.parse(document.cookie)});