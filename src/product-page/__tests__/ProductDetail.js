import React from 'react'
import {render, renderIntoDocument, cleanup} from 'react-testing-library'
import ProductDetail from '../ProductDetail'

// test image gallery -- setMainImg clicked and renders properly
// add cart works properly

// afterEach(cleanup)

// test('calls add to cart when button clicked', () => {
//     // how to mock out cart items / work with Redux?
//     const cart = [];
//     const product = {}
//     const onAdd = jest.fn()
//     const {getByText} = renderIntoDocument(
//         <ProductDetail
//             product={product}
//             onAdd={onAdd}
//       />,
//     )
  
//     getByText('add to cart').click()
  
//     expect(onAdd).toHaveBeenCalledTimes(1)
//     expect(checkout).toHaveBeenCalledWith(product)
//   })
  
// test('snapshot', () => {
//     const {container} = render(<ProductDetail />)
//     expect(container.firstChild).toMatchSnapshot()
// })