import configureStore from 'redux-mock-store'
import { addItemCartR, upDateQtyCartR, removeItemCartR, clearCartR } from '../actions'
import { testProduct } from '../../testUtils/mockData'

const middlewares = []
const mockStore = configureStore(middlewares)

test('dispatches action to add item to cart', () => {

    const initialState = {}
    const store = mockStore(initialState)
  
    store.dispatch(addItemCartR(testProduct))
  
    const actions = store.getActions()
    const expectedPayload = { type: 'CART_ADD', payload: testProduct }
    expect(actions).toEqual([expectedPayload])
    }
)

test('dispatches action to update cart item quantity', () => {

    const initialState = {...testProduct, quantity: 1}
    const store = mockStore(initialState)
  
    store.dispatch(upDateQtyCartR(testProduct, 2))
  
    const actions = store.getActions()
    const expectedPayload = { type: 'CART_UPDATE', payload: {product: testProduct, quantity: 2}}
    expect(actions).toEqual([expectedPayload])
    }
)

test('dispatches action to remove cart item', () => {

    const initialState = {...testProduct, quantity: 1}
    const store = mockStore(initialState)
  
    store.dispatch(removeItemCartR(testProduct))
  
    const actions = store.getActions()
    const expectedPayload = { type: 'CART_REMOVE', payload: testProduct}
    expect(actions).toEqual([expectedPayload])
    }
)

test('dispatches action to clear all items from cart', () => {

    const initialState = {...testProduct, quantity: 1}
    const store = mockStore(initialState)
  
    store.dispatch(clearCartR())
  
    const actions = store.getActions()
    const expectedPayload = { type: 'CART_CLEAR' }
    expect(actions).toEqual([expectedPayload])
    }
)