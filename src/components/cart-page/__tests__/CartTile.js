import React from 'react'
import { cleanup, fireEvent, screen } from '@testing-library/react'
import CartTile from '../CartTile'
import { testCartProduct } from '../../../testUtils/mockData'
import { renderWithRouter } from '../../../testUtils/testUtils'


afterEach(cleanup)

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch
}));

test('calls onUpdate with the product and value when input updated with positive int', () => {
    renderWithRouter(<CartTile product={testCartProduct[0]}/>, {path: "/cart", route: "/cart"})

    screen.getByDisplayValue(1).focus();
    fireEvent.change(screen.getByDisplayValue(1), {target: {value: '2'}})
    screen.getByText('X').focus();

    expect(mockDispatch).toHaveBeenCalledTimes(1)
    expect(mockDispatch).toHaveBeenCalledWith({
        type: 'CART_UPDATE',
        payload: {
            product: testCartProduct[0],
            quantity: '2'
        }
    })
})

test('calls onRemove with the product and value when input updated with 0', () => {
    renderWithRouter(<CartTile product={testCartProduct[0]}/>, {path: "/cart", route: "/cart"})
  
    screen.getByDisplayValue(1).focus();
    fireEvent.change(screen.getByDisplayValue(1), {target: {value: '0'}})
    screen.getByText('X').focus();

    expect(mockDispatch).toHaveBeenCalledTimes(1)
    expect(mockDispatch).toHaveBeenCalledWith({
        type: 'CART_REMOVE',
        payload: testCartProduct[0]
    })
})

test('calls onRemove with the product when button clicked', () => {
    renderWithRouter(<CartTile product={testCartProduct[0]}/>, {path: "/cart", route: "/cart"})

    fireEvent.click(screen.getByText('X'))
  
    expect(mockDispatch).toHaveBeenCalledTimes(1)
    expect(mockDispatch).toHaveBeenCalledWith({
        type: 'CART_REMOVE',
        payload: testCartProduct[0]
    })
})
  
test('snapshot', () => {
    const {container} = renderWithRouter(<CartTile product={testCartProduct[0]}/>, {path: "/cart", route: "/cart"})
    expect(container.firstChild).toMatchSnapshot()
})