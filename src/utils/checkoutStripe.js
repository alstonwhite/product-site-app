export const stripeToken = 'pk_test_51I5I1BK0xeA3dafDrvWxWV8PlgHI2kx3rDhGLGk1JacUBpmZBp6ZezpfNBNzZNxLpsy78L6xZBleuFPlQSATmEyg00rUE6BtQQ'; 

export const checkout = (stripe, cart) => {
    return (stripe ? stripe.redirectToCheckout({
        lineItems: cart.map(item => ({
            price: item.stripePrice,
            quantity: item.quantity
        })),
        mode: 'payment',
        successUrl: 'http://localhost:3000/order-confirm',
        cancelUrl: 'http://localhost:3000/cart',
    }) : null)
}