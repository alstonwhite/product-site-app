import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";

import ProductTile from './ProductTile'

const ProductGrid = ({products, filter}) => {

  const lookup = [
    {
      display: "Product Group 1",
      kebab: "product-group-1"
    },
    {
      display: "Product Group 2",
      kebab: "product-group-2"
    },
    {
      display: "Product Group 3",
      kebab: "product-group-3"
    },
    {
      display: "Product Group 4",
      kebab: "product-group-4"
    }
  ]

  let filter2 = useParams().group;
  let filter2Display = filter2 ?
    lookup.find(x => x.kebab === filter2).display :
    "All Products";


  return (
    <div className="product-grid" id="product-grid">
      {/* <h1>{filter}</h1>
      <div className="product-grid-items">
          {filter === "All Products" ?
            products.map(product => (
              <ProductTile 
                  product = {product}
              />))
            : products.map(product => (
              product.section === filter &&
              <ProductTile 
                  product = {product}
              />
          ))}
      </div> */}
      <h1>{filter2Display}</h1>
      <div className="product-grid-items">
          {filter2 ?
            products.map(product => (
              product.section === filter2Display &&
              <ProductTile 
                  product = {product}
              />))
            : products.map(product => (
              <ProductTile 
                  product = {product}
              />
          ))}
      </div>
    </div>
  );
};
  
  export default ProductGrid;