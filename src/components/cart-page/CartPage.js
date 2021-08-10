import React, {useState, useEffect} from 'react';

import CartTile from './CartTile'
import { useSelector } from "react-redux";
import { stripeToken, checkout } from '../../utils/checkoutStripe'

const CartPage = () => {

    const [stripe, setStripe] = useState(null)

    const cart = useSelector(state => state.cart); 
    let cartValue = cart ? parseInt(cart.reduce((sum, cur) => sum + cur.price * cur.quantity, 0)) : 0;

    useEffect(() => {
        if (window.Stripe) setStripe(window.Stripe(stripeToken))
    }, [])

    return (
        <div className="cart-page" id="cart-page">
            <h1>Cart</h1>
            <div className="cart-grid__items">
                {cart.map(product => (
                    <CartTile 
                        product={product}
                        key={product.id}
                    />
                ))}
            </div>
            <div className="cart-page__footer">
                <div className="cart-page__footer__value">
                    {`Total: $${cartValue}`}
                </div>
                <button
                    className ="cart-page__footer__checkout btn"
                    onClick={() => checkout(stripe, cart)}
                >
                    Checkout
                </button>
            </div>
        </div>
    );
};
    
export default CartPage;