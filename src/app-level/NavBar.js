import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {

  const cart = useSelector(state => state.cart); 
  let cartItems = cart ? cart.reduce((sum, cur) => sum + cur.quantity, 0) : 0;
  let cartValue = cart ? cart.reduce((sum, cur) => sum + cur.price * cur.quantity, 0) : 0;

  return (
    <div className="nav">
      <Link to="/cart" className = "nav__cart-content">
        {/* Cart logo instead of "cart" */}
        <div className = "nav__cart-items">{`Cart: ${cartItems} items`}</div>
        <div className = "nav__cart-value">{` $${cartValue}`}</div>
      </Link>
      <ul>
        <li>
          <Link to="/" className = "nav__item">All Products</Link>
        </li>
        <li>
          <Link to="/category/product-group-1" className = "nav__item">Product Group 1</Link>
        </li>
        <li>
          <Link to="/category/product-group-2" className = "nav__item">Product Group 2</Link>
        </li>
        <li>
          <Link to="/category/product-group-3" className = "nav__item">Product Group 3</Link>
        </li>
      </ul>
    </div>
    );
  };
  
  export default NavBar;