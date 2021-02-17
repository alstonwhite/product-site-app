import React from 'react'
import { cleanup, fireEvent, screen } from '@testing-library/react'
import CartPage from '../CartPage'
import { testProduct } from '../../../testUtils/mockData'
import { renderWithRouter } from '../../../testUtils/testUtils'


afterEach(cleanup)

jest.mock('react-redux', () => {
    return {
    ...jest.requireActual('react-redux'),
    // cart initializes with item 'testCartProduct' -- hardcoded bc import out of scope 
    useSelector: () => 
    [{
        id: 0,
        image1: {fields: {file: {url: "1"}}},
        image2: {fields: {file: {url: "2"}}},
        image3: {fields: {file: {url: "3"}}},
        price: 5,
        title: "Product 1",
        description: "Description",
        productSection: {fields: {slug: "section1"}},
        active: true,
        quantity: 1
    }],
    useDispatch: jest.fn()
    }
});

test('renders proper cart tiles', () => {
    renderWithRouter(<CartPage/>, {path: "/cart", route: "/cart"})
    
    expect(screen.getAllByTestId('cart-tile')).toHaveLength(1)
})

// mocked checkout call not triggering
test('calls checkout when button clicked', () => {
    const mockCheckout = jest.fn();
    jest.mock('../../../utils/checkoutStripe', () => ({
        ...jest.requireActual('../../../utils/checkoutStripe'),
        checkout: () => mockCheckout
    }));
    renderWithRouter(<CartPage/>, {path: "/cart", route: "/cart"})
  
    fireEvent.click(screen.getByText('Checkout'))
  
    expect(mockCheckout).toHaveBeenCalledTimes(1)
})

test('calculates and displays cart value', () => {
  const mockCheckout = jest.fn();
  jest.mock('../../../utils/checkoutStripe', () => ({
      ...jest.requireActual('../../../utils/checkoutStripe'),
      checkout: () => mockCheckout
  }));
  renderWithRouter(<CartPage/>, {path: "/cart", route: "/cart"})

  expect(screen.getByText(testProduct.price)).toBeInTheDocument()
})

test('snapshot', () => {
  const {container} = renderWithRouter(<CartPage/>, {path: "/cart", route: "/cart"})
  expect(container.firstChild).toMatchSnapshot()
})