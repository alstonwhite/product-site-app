import React from 'react';
import { useParams } from "react-router-dom";

import ProductTile from './ProductTile'

const ProductGrid = ({products}) => {

  let filter = useParams().group;

  return (
    <div className="product-grid" id="product-grid">
      <h1 className="product-grid__header">
        {products[0] && 
        filter ? products.find(x => x.productSection.fields.slug === filter).productSection.fields.sectionTitle : 
        "All Products"}
      </h1>
      <div className="product-grid__items">
          {filter ?
            products && products.map(product => (
              product.productSection.fields.slug === filter &&
              <ProductTile 
                  product = {product}
                  key={product.id}
              />))
            : products && products.map(product => (
              <ProductTile 
                  product = {product}
                  key={product.id}
              />
          ))}
      </div>
    </div>
  );
};
  
  export default ProductGrid;