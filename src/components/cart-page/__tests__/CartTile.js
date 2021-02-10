import React from 'react'
import {render, renderIntoDocument, cleanup} from 'react-testing-library'
import CartPage from '../CartTile'

// renders proper image/title/price of item 
// calls onUpdate when quantity input changed
// calls onRemove when remove button clicke
// onUpdate edge case --> make sure input validated, what if value blank or negative?

// afterEach(cleanup)

// test('calls onUpdate with the product and value when input updated with valid string', () => {
//     // how to mock out cart items / work with Redux?
//     const cart = [];
//     const product = {}
//     const onUpdate = jest.fn()
//     const onRemove = jest.fn()
//     const {getByText} = renderIntoDocument(
//         <CartTile
//             product={product}
//             onUpdate={onUpdate}
//             onRemove={onRemove}
//       />,
//     )
  
//     // get input -- create test class?
//     // getByText('X').click()

//     expect(onUpdate).toHaveBeenCalledTimes(1)
//     expect(onUpdate).toHaveBeenCalledWith

//   })

//   test('calls onRemove with the product when button clicked', () => {
//     // how to mock out cart items / work with Redux?
//     const cart = [];
//     const product = {}
//     const onUpdate = jest.fn()
//     const onRemove = jest.fn()
//     const {getByText} = renderIntoDocument(
//         <CartTile
//             product={product}
//             onUpdate={onUpdate}
//             onRemove={onRemove}
//       />,
//     )
  
//     getByText('X').click()
  
//     expect(onRemove).toHaveBeenCalledTimes(1)
//     expect(onRemove).toHaveBeenCalledWith(product)
//   })
  
//   test('snapshot', () => {
//     const {container} = render(<CartTile />)
//     expect(container.firstChild).toMatchSnapshot()
//   })