import React from 'react';
import { useParams } from "react-router-dom";

import NavBar from '../app-level/NavBar'
import ProductDetail from './ProductDetail';


const ProductPage = ({products, onAdd}) => {
  
  let params = useParams();
  let product = products.find(p => p.id === params.id);
  
  return (
    <div className="product-page" id="product-page">
      <NavBar/>
      <ProductDetail 
        product={product}
        onAdd={onAdd}
      />
    </div>
  );
};
  
  export default ProductPage;