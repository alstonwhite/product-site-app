import { CART_ADD, CART_UPDATE, CART_REMOVE } from '../actionTypes';

const initState = {cart: []};

export default (state = initState, action) => {
    switch (action.type){
        case CART_ADD:
            // console.log("action.payload:")
            // console.log(action.payload)
            // console.log("state:")
            // console.log(state)
            if (state.cart.find(x => x.id === action.payload.id)) {
                state.cart.find(x => x.id === action.payload.id).quantity++;
                return {...state, cart: [...state.cart]}
            } else {
                action.payload.quantity = 1;
                return {...state, cart: [...state.cart, action.payload]};
            }
        case CART_UPDATE:
            // console.log(action.payload)
            state.cart[state.cart.findIndex(x => x.id === action.payload.product.id)].quantity = parseInt(action.payload.quantity);
            return {...state, cart: [...state.cart]}
        case CART_REMOVE:
            // console.log(action.payload)
            let newCart = state.cart.filter(x => x.id !== action.payload.id);
            return {...state, cart: [...newCart]};
        default:
            return state;
    }
};

// don't change actual state, create new instance