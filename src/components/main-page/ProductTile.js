import React from 'react';
import { Link } from "react-router-dom";

import logo from '../../assets/particle-logo2.jpeg';

const ProductTile = ({product}) => {
    return (
      <div className="product-tile" id="product-tile">
        <Link to={`/product/${product.id}`} className = "product-tile__content">  
          <img alt='logo' className="product-tile__img" src={product.image1 ? product.image1.fields.file.url : logo}/>
          <div className="product-tile__name">{product.title}</div>
          <div className="product-tile__price">
              <span>$</span>
              {product.price}
          </div>
        </Link>
      </div>
    );
  };
  
  export default ProductTile;