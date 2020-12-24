import React from 'react';

import CartTile from './CartTile'
import { useSelector } from "react-redux";

const CartPage = ({onUpdate, onRemove}) => {

    const cart = useSelector(state => state.cart); 
    let cartValue = cart ? parseInt(cart.reduce((sum, cur) => sum + cur.price * cur.quantity, 0)) : 0;

    return (
        <div className="cart-page" id="cart-page">
            <h1>Cart</h1>
            <div className="cart-grid__items">
                {cart.map(product => (
                    <CartTile 
                        product={product}
                        onUpdate={onUpdate}
                        onRemove={onRemove}
                    />
                ))}
            </div>
            <div className="cart-page__footer">
                <div className="cart-page__footer__value">
                    {`Total: $${cartValue}`}
                </div>
                <a 
                    href='#' 
                    className ="button cart-page__footer__checkout"
                    // onClick={() => checkout()}
                >
                    Checkout
                </a>
                {/* change to button? */}
            </div>
        </div>
    );
  };
    
    export default CartPage;