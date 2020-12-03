import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const NavBar = ({cart}) => {
  let cartItems = cart.length;
  let cartValue = cart ? parseInt(cart.reduce((sum, cur) => sum + cur.price,0)) : 0;
  return (
    <div className="nav-bar" id="nav-bar">
      <a href='#' className = "nav-cart-content">
        <span className = "nav-cart-items">{`Cart: ${cartItems} items / `}</span>
        <span className = "nav-cart-value">{` $${cartValue}`}</span>
      </a>
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
        <li>
          <Link to="/category/product-group-4">Product Group 4</Link>
        </li>
      </ul>
    </div>
    );
  };
  
  export default NavBar;