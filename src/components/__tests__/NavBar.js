import React from 'react'
import { cleanup, screen } from '@testing-library/react'
import NavBar from '../NavBar'
import { testSections } from '../../testUtils/mockData'
import { renderWithRouter } from '../../testUtils/testUtils'


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

test('displays cart quantity and calculated cart value', () => {
    renderWithRouter(<NavBar sections={testSections}/>)
  
    expect(screen.getByText('Cart: 1 item')).toBeInTheDocument()
    expect(screen.getByText('$5')).toBeInTheDocument()
})

test('renders proper number of sections', () => {
    renderWithRouter(<NavBar sections={testSections}/>)
    
    expect(screen.getAllByTestId('nav-section')).toHaveLength(testSections.length)
})

test('snapshot', () => {
    const {container} = renderWithRouter(<NavBar sections={testSections}/>)
    expect(container.firstChild).toMatchSnapshot()
})