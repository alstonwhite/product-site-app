import React from 'react'
import {render, renderIntoDocument, cleanup} from 'react-testing-library'
import CartPage from '../CartPage'

// calls checkout when button clicked
// edge case --> checkout call when no items are in the cart? what should CartPage display when empty? (blank or message?)
// renders proper number of cartTiles based on cart
// calculates and displays proper cart value

// afterEach(cleanup)

// test('calls checkout when button clicked', () => {
//     // how to mock out cart items / work with Redux?
//     const cart = [];
//     const checkout = jest.fn()
//     const onUpdate = jest.fn()
//     const onRemove = jest.fn()
//     const {getByText} = renderIntoDocument(
//         <CartPage
//             onUpdate={onUpdate}
//             onRemove={onRemove}
//       />,
//     )
  
//     getByText('submit').click()
  
//     expect(checkout).toHaveBeenCalledTimes(1)
//     // cart isn't passed into checkout fx as a param, can't test that checkout was called with below
//     // expect(checkout).toHaveBeenCalledWith()
//   })
  
//   test('snapshot', () => {
//     const {container} = render(<CartPage />)
//     expect(container.firstChild).toMatchSnapshot()
//   })