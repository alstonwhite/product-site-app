import React from 'react'
import { cleanup, screen } from '@testing-library/react'
import ProductPage from '../ProductPage'
import { testSections, testProducts } from '../../../testUtils/mockData'
import { renderWithRouter } from '../../../testUtils/testUtils'

afterEach(cleanup)

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
    id: "0",
    }), 
}));

jest.mock('react-redux', () => {
    return {
    ...jest.requireActual('react-redux'), 
    useSelector: () => [],
    useDispatch: jest.fn()
    }
});

test('renders proper product', () => {
    renderWithRouter(<ProductPage products={testProducts} sections={testSections}/>)
    const product = testProducts.find(p => p.id === "0")

    expect(screen.getByText(product.title)).toBeInTheDocument()
})

test('snapshot', () => {
    const {container} = renderWithRouter(<ProductPage products={testProducts} sections={testSections}/>)
    expect(container.firstChild).toMatchSnapshot()
})
