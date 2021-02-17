import reducer from '../cart'
import { testProducts, testProduct } from '../../../testUtils/mockData'

test('returns the initial state', () => {
    const initialState = {cart: []}
    
    expect(reducer(undefined, {})).toEqual(initialState)
    }
)

test('handles adding item to empty cart', () => {
    const endState = {cart: [{...testProduct, quantity: 1}]}
    const action = {
        type: 'CART_ADD',
        payload: testProduct
    }

    expect(reducer(undefined, action)).toEqual(endState)
    }
)

test('handles adding item to cart with same existing item', () => {
    const initialState = {cart: [{...testProduct, quantity: 1}]}
    const endState = {cart: [{...testProduct, quantity: 2}]}
    const action = {
        type: 'CART_ADD',
        payload: testProduct
    }

    expect(reducer(initialState, action)).toEqual(endState)
    }
)

test('handles updating quantity of existing cart item', () => {
    const initialState = {cart: [{...testProduct, quantity: 1}]}
    const endState = {cart: [{...testProduct, quantity: 2}]}
    const action = {
        type: 'CART_UPDATE',
        payload: {
            product: testProduct,
            quantity: 2
        }
    }

    expect(reducer(initialState, action)).toEqual(endState)
    }
)

test('handles removing item from cart', () => {
    const initialState = {cart: [{...testProduct, quantity: 1}]}
    const endState = {cart: []}
    const action = {
        type: 'CART_REMOVE',
        payload: testProduct
    }

    expect(reducer(initialState, action)).toEqual(endState)
    }
)

test('handles clearing all items from cart', () => {
    const initialState = {cart: testProducts}
    const endState = {cart: []}
    const action = {
        type: 'CART_CLEAR'
    }

    expect(reducer(initialState, action)).toEqual(endState)
    }
)