import React from 'react'
import { render, cleanup, fireEvent, screen } from '@testing-library/react'
import ProductDetail from '../ProductDetail'
import { testProduct } from '../../../testUtils/mockData'


afterEach(cleanup)

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch
}));

test('calls add to cart when button clicked', () => {
    render(<ProductDetail product={testProduct}/>)
  
    fireEvent.click(screen.getByText('Add to Cart'))
  
    expect(mockDispatch).toHaveBeenCalledTimes(1)
    expect(mockDispatch).toHaveBeenCalledWith({
        type: 'CART_ADD',
        payload: testProduct
    })
})

test('image gallery updates when new img clicked', () => {
    render(<ProductDetail product={testProduct}/>)
  
    fireEvent.click(screen.getByTestId('img2'))

    expect(screen.getByTestId('imgMain').src).toEqual(screen.getByTestId('img2').src)
})
  
test('snapshot', () => {
    const {container} = render(<ProductDetail product={testProduct}/>)

    expect(container.firstChild).toMatchSnapshot()
})