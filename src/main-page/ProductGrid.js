import React from 'react';

import ProductTile from './ProductTile'

const ProductGrid = ({products, filter}) => {
  if (filter === "All Products") {
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
  } else {
    return (
      <div className="product-grid" id="product-grid">
        <h1>All Products</h1>
        <div className="product-grid-items">
            {products.map(product => (
                product.section === filter &&
                <ProductTile 
                    product = {product}
                />
            ))}
        </div>
      </div>
    );
  }
};
  
  export default ProductGrid;