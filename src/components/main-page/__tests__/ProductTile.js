import React from 'react'
import { cleanup, screen } from '@testing-library/react'
import ProductTile from '../ProductTile'
import { testProduct } from '../../../testUtils/mockData'
import { renderWithRouter } from '../../../testUtils/testUtils'


afterEach(cleanup)

test('renders proper product', () => {
    renderWithRouter(<ProductTile product={testProduct}/>, {path: "/"})

    expect(screen.getByText(testProduct.title)).toBeInTheDocument()
})
  
test('snapshot', () => {
    const {container} = renderWithRouter(<ProductTile product={testProduct}/>, {path: "/"})

    expect(container.firstChild).toMatchSnapshot()
})

