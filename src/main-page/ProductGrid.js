import React from 'react';
import { useParams } from "react-router-dom";

import ProductTile from './ProductTile'

const ProductGrid = ({products}) => {

  let filter = useParams().group;
  let filterDisplay = filter ?
    products.find(x => x.sectionSlug === filter).section :
    "All Products";

  return (
    <div className="product-grid" id="product-grid">
      <h1 className="product-grid__header">{filterDisplay}</h1>
      <div className="product-grid__items">
          {filter ?
            products && products.map(product => (
              product.section === filterDisplay &&
              <ProductTile 
                  product = {product}
              />))
            : products && products.map(product => (
              <ProductTile 
                  product = {product}
              />
          ))}
      </div>
    </div>
  );
};
  
  export default ProductGrid;