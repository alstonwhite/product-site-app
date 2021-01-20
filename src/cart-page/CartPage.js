import React, {useState, useEffect} from 'react';

import CartTile from './CartTile'
import { useSelector } from "react-redux";

const CartPage = ({onUpdate, onRemove}) => {

    const stripeToken = 'pk_test_51I5I1BK0xeA3dafDrvWxWV8PlgHI2kx3rDhGLGk1JacUBpmZBp6ZezpfNBNzZNxLpsy78L6xZBleuFPlQSATmEyg00rUE6BtQQ';
    const [stripe, setStripe] = useState(null)

    const cart = useSelector(state => state.cart); 
    let cartValue = cart ? parseInt(cart.reduce((sum, cur) => sum + cur.price * cur.quantity, 0)) : 0;

    useEffect(() => {
        if (window.Stripe) setStripe(window.Stripe(stripeToken))
    }, [stripeToken])

    const checkout = () => {
        stripe.redirectToCheckout({
            lineItems: cart.map(item => ({
                price: item.stripePrice,
                quantity: item.quantity
            })),
            mode: 'payment',
            successUrl: 'http://localhost:3000',
            cancelUrl: 'http://localhost:3000',
        })
    }

    return (
        <div className="cart-page" id="cart-page">
            <h1>Cart</h1>
            <div className="cart-grid__items">
                {cart.map(product => (
                    <CartTile 
                        product={product}
                        onUpdate={onUpdate}
                        onRemove={onRemove}
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
                    onClick={checkout}
                >
                    Checkout
                </button>
            </div>
        </div>
    );
  };
    
export default CartPage;