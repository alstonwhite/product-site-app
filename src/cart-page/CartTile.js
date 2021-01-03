import React from 'react';
import { Link } from "react-router-dom";

import logo from '../logo.svg';

const CartTile = ({product, onUpdate, onRemove}) => {
    
    return (
      <div className="cart-tile" id="cart-tile">
        <Link className="cart-tile__content" to={`/product/${product.id}`}>  
          <img alt='logo' className='cart-tile__content__img' src={product.image1 ? product.image1.fields.file.url : logo}/>
          <div className="cart-tile__content__name">{product.title}</div>  
          <div className="cart-tile__content__price">
              <span>$</span>
              {product.price}
            </div>
        </Link>
        <div className="cart-tile__action">
            {/* check input (positive integers only, what if deleted?) */}
            <input 
                className="cart-tile__action__qty"
                type="number"
                defaultValue={product.quantity}
                onChange={event=>onUpdate(product,event.target.value)}
            />
            <button
                className="cart-tile__action__remove"
                onClick={()=>onRemove(product)}
            >
            X
            </button>
        </div>
      </div>
    );
  };
  
  export default CartTile;