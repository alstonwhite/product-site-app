import React from 'react';

import logo from '../logo.svg';

const ProductDetail = ({product, onAdd}) => {

      return (
        <div className="product-detail" id="product-detail">
            <img alt='logo' className="product-detail__img" src={logo}/>
            <div className='product-detail__content'>
                <div className="product-detail__content__name">{product.title}</div>
                <div className="product-detail__content__price">
                    <span>$</span>
                    {product.price}
                </div>
                <div className="product-detail__content__description">
                    {product.description}
                </div>
                <a 
                    href='#' 
                    className="product-detail__content__add-cart"
                    onClick={()=>onAdd(product)}
                >
                    Add to Cart
                </a>
                {/* change to button? */}
            </div>
        </div>
      );
    };
    
    export default ProductDetail;