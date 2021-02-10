import { CART_ADD, CART_UPDATE, CART_REMOVE, CART_CLEAR } from './actionTypes';


export const addItemCartR = product => (
    {
        type: CART_ADD,
        payload: product
    }
);

export const upDateQtyCartR = (product, qty) => (
    {
        type: CART_UPDATE,
        payload: {
            product: product,
            quantity: qty
        }
    }
);

export const removeItemCartR = product => (
    {
        type: CART_REMOVE,
        payload: product
    }
);

export const clearCartR = () => (
    {
        type: CART_CLEAR

    }
);