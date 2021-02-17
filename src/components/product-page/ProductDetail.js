import React, { useState } from 'react';

import { useDispatch } from "react-redux";
import { addItemCartR } from '../../redux/actions';

import logo from '../../assets/particle-logo2.jpeg';

// note: src={product.image1 ? product.image1.fields.file.url : logo} renders 'logo' as placeholder if Contentful product does not have image

const ProductDetail = ({product}) => {

    const dispatch = useDispatch();
    const onAdd = product => dispatch(addItemCartR(product));

    const [mainImg, setMainImg] = useState(product.image1 ? product.image1.fields.file.url : logo);

    return (
    <div className="product-detail" id="product-detail">
        <div className='product-detail__img-gallery'>
            <img alt='logo' className="product-detail__img-main" data-testid="imgMain" src={mainImg}/>
            <img 
                alt='logo' 
                className="product-detail__img-thumb1" 
                src={product.image1 ? product.image1.fields.file.url : logo}
                onClick={()=>setMainImg(product.image1 ? product.image1.fields.file.url : logo)}
            />
            <img 
                alt='logo' 
                className="product-detail__img-thumb2" 
                data-testid="img2"
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
            <button 
                className="product-detail__content__add-cart btn"
                onClick={()=>onAdd(product)}
            >
                Add to Cart
            </button>
        </div>
    </div>
    );
};
    
export default ProductDetail;