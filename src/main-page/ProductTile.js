import React from 'react';

import logo from '../logo.svg';

const ProductTile = ({product}) => {
    
    return (
      <div className="product-tile" id="product-tile">
          <img alt='logo' className='tile-img' src={logo}/>
          <div className="product-name">{product.productTitle}</div>
          <div className="product-price">
              <span>$</span>
              {product.price}
          </div>
      </div>
    );
  };
  
  export default ProductTile;

  // 