import React from 'react';
import { Link } from "react-router-dom";

import logo from '../logo.svg';

const ProductTile = ({product}) => {
    return (
      <div className="product-tile" id="product-tile">
        <Link to={`/product/${product.id}`}>  
          <img alt='logo' className='tile-img' src={logo}/>
          <div className="product-name">{product.title}</div>
          <div className="product-price">
              <span>$</span>
              {product.price}
          </div>
        </Link>
      </div>
    );
  };
  
  export default ProductTile;