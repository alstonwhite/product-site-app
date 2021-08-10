import { CART_ADD, CART_UPDATE, CART_REMOVE, CART_CLEAR } from '../actionTypes';

const initState = {cart: []};

const rootReducer = (state = initState, action) => {
    switch (action.type){
        case CART_ADD:
            if (state.cart.find(x => x.id === action.payload.id)) {
                state.cart.find(x => x.id === action.payload.id).quantity++;
                return {...state, cart: [...state.cart]}
            } else {
                action.payload.quantity = 1;
                return {...state, cart: [...state.cart, action.payload]};
            }
        case CART_UPDATE:
            state.cart[state.cart.findIndex(x => x.id === action.payload.product.id)].quantity = parseInt(action.payload.quantity);
            return {...state, cart: [...state.cart]}
        case CART_REMOVE:
            let newCart = state.cart.filter(x => x.id !== action.payload.id);
            return {...state, cart: [...newCart]};
        case CART_CLEAR:
            return {cart: []};
        default:
            return state;
    }
};

export default rootReducer;