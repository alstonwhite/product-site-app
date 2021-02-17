import React from 'react'
import { cleanup, screen } from '@testing-library/react'
import ProductGrid from '../ProductGrid'
import { testProducts } from '../../../testUtils/mockData'
import { renderWithRouter } from '../../../testUtils/testUtils'


afterEach(cleanup)

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch
}));

test('renders proper product tiles when unfiltered', () => {
    renderWithRouter(<ProductGrid products={testProducts}/>, {path: "/"})
    
    expect(screen.getAllByTestId('product-tile')).toHaveLength(testProducts.length)
})

test('renders proper product tiles when filtered', () => {
    const filter = "section1"
    renderWithRouter(<ProductGrid products={testProducts}/>, 
        {path: "/category/:group", route: `/category/${filter}`})
    
        expect(screen.getAllByTestId('product-tile')).toHaveLength(
        testProducts.filter(p => p.productSection.fields.slug === "section1").length
        )
})
  
test('snapshot', () => {
    const {container} = renderWithRouter(<ProductGrid products={testProducts}/>, {path: "/"})

    expect(container.firstChild).toMatchSnapshot()
})

