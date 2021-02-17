import React from 'react'
import { cleanup } from '@testing-library/react'
import OrderSuccess from '../OrderSuccess'
import { renderWithRouter } from '../../../testUtils/testUtils'


afterEach(cleanup)

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch
}));

test('calls cart clear on render', () => {
    renderWithRouter(<OrderSuccess/>, {path: "/order-confirm", route: "/order-confirm"})

    expect(mockDispatch).toHaveBeenCalledTimes(1)
    expect(mockDispatch).toHaveBeenCalledWith({
        type: 'CART_CLEAR'
    })
})

test('snapshot', () => {
    const {container} = renderWithRouter(<OrderSuccess/>, {path: "/order-confirm", route: "/order-confirm"})
    expect(container.firstChild).toMatchSnapshot()
  })