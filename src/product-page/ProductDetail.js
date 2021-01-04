import React, { useState } from 'react';

import logo from '../logo.svg';

const ProductDetail = ({product, onAdd}) => {

    const [mainImg, setMainImg] = useState(product.image1 ? product.image1.fields.file.url : logo);

      return (
        <div className="product-detail" id="product-detail">
            <div className='product-detail__img-gallery'>
                <img alt='logo' className="product-detail__img-main" src={mainImg}/>
                <img 
                    alt='logo' 
                    className="product-detail__img-thumb1" 
                    src={product.image1 ? product.image1.fields.file.url : logo}
                    onClick={()=>setMainImg(product.image1 ? product.image1.fields.file.url : logo)}
                />
                <img 
                    alt='logo' 
                    className="product-detail__img-thumb2" 
                    src={product.image1 ? product.image2.fields.file.url : logo}
                    onClick={()=>setMainImg(product.image1 ? product.image2.fields.file.url : logo)}
                />
                <img 
                    alt='logo' 
                    className="product-detail__img-thumb3" 
                    src={product.image1 ? product.image3.fields.file.url : logo}
                    onClick={()=>setMainImg(product.image1 ? product.image3.fields.file.url : logo)}
                />
            </div>
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