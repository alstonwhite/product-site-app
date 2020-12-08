import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from '../logo.svg';

const CartTile = ({product, onUpdate, onRemove}) => {
    return (
      <div className="cart-tile" id="cart-tile">
        <Link className="cart-tile-link" to={`/product/${product.id}`}>  
          <img alt='logo' className='cart-tile-img' src={logo}/>
          <div className="product-name">{product.productTitle}</div>  
          <div className="product-price">
              <span>$</span>
              {product.price}
            </div>
        </Link>
        <div className="cart-tile-action">
            <input 
                className="cart-qty-input"
                type="number"
                defaultValue={product.quantity}
                onChange={event=>onUpdate(product,event.target.value)}
            />
            <button
                className="cart-button-remove"
                onClick={()=>onRemove(product)}
            >
            X
            </button>
        </div>
      </div>
    );
  };
  
  export default CartTile;