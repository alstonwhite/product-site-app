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

const ProductGrid = ({products}) => {

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
  // add slug (kebab) to testData, lookup against that array

  let filter = useParams().group;
  let filterDisplay = filter ?
    lookup.find(x => x.kebab === filter).display :
    "All Products";


  return (
    <div className="product-grid" id="product-grid">
      <h1>{filterDisplay}</h1>
      <div className="product-grid-items">
          {filter ?
            products.map(product => (
              product.section === filterDisplay &&
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