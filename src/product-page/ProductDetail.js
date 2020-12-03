import React from 'react';

import logo from '../logo.svg';

const ProductDetail = ({product, onAdd}) => {
      return (
        <div className="product-detail" id="product-detail">
            <img alt='logo' className='detail-img' src={logo}/>
            <div className='product-info'>
                <div className="product-name">{product.productTitle}</div>
                <div className="product-price">
                    <span>$</span>
                    {product.price}
                </div>
                <div className="product-description">
                    {product.description}
                </div>
                <a 
                    href='#' 
                    className = "add-cart"
                    onClick={() => onAdd(product)}
                >
                    Add to Cart
                </a>
            </div>
        </div>
      );
    };
    
    export default ProductDetail;