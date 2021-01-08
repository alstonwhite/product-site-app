import React from 'react';
import { useParams } from "react-router-dom";

import ProductTile from './ProductTile'

const ProductGrid = ({products}) => {

  let filter = useParams().group;

  return (
    <div className="product-grid" id="product-grid">
      <h1 className="product-grid__header">
        {products[0] && 
        filter ? products.find(x => x.sectionSlug === filter).section : 
        "All Products"}
      </h1>
      <div className="product-grid__items">
          {filter ?
            products && products.map(product => (
              product.sectionSlug === filter &&
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