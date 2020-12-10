import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const NavBar = ({cart}) => {

  let cartItems = cart ? cart.reduce((sum, cur) => sum + cur.quantity, 0) : 0;
  let cartValue = cart ? cart.reduce((sum, cur) => sum + cur.price * cur.quantity, 0) : 0;

  return (
    <div className="nav-bar" id="nav-bar">
      <Link to="/cart" className = "nav-cart-content">
        <span className = "nav-cart-items">{`Cart: ${cartItems} items / `}</span>
        <span className = "nav-cart-value">{` $${cartValue}`}</span>
      </Link>
      <ul>
        <li>
          <Link to="/">All Products</Link>
        </li>
        <li>
          <Link to="/category/product-group-1">Product Group 1</Link>
        </li>
        <li>
          <Link to="/category/product-group-2">Product Group 2</Link>
        </li>
        <li>
          <Link to="/category/product-group-3">Product Group 3</Link>
        </li>
      </ul>
    </div>
    );
  };
  
  export default NavBar;