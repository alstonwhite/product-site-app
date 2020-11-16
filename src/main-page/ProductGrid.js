import React from 'react';

import ProductTile from './ProductTile'

const ProductGrid = ({products}) => {
  
    return (
      <div className="product-grid" id="product-grid">
        <h1>All Products</h1>
        <div className="product-grid-items">
            {products.map(product => (
                <ProductTile 
                    product = {product}
                />
            ))}
        </div>
      </div>
    );
  };
  
  export default ProductGrid;