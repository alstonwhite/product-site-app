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

import Header from '../app-level/Header'
import NavBar from '../app-level/NavBar'
import ProductDetail from './ProductDetail';


const ProductPage = ({products, cart, onAdd}) => {
  
  let params = useParams();
  let product = products.find(p => p.id === parseInt(params.id));
  
  return (
    <div className="product-page" id="product-page">
      <Header/>
      <ProductDetail 
        product={product}
        onAdd={onAdd}
      />
      <NavBar
        cart={cart}
      />
    </div>
  );
};
  
  export default ProductPage;