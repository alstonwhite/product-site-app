import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const NavBar = ({onFilter}) => {
    return (
      <div className="nav-bar" id="nav-bar">
        <a href='#' className = "nav-cart-content">
          <span className = "nav-cart-items">Cart: 0 items / </span>
          <span className = "nav-cart-value"> $0.00</span>
        </a>
        <ul>
          {/* <li>
            <a href='#' onClick={() => onFilter("All Products")}>All Products</a>  
          </li>
          <li>
            <a href='#'onClick={() => onFilter("Product Group 1")}>Product Group 1</a>  
          </li>
          <li>
            <a href='#' onClick={() => onFilter("Product Group 2")}>Product Group 2</a>  
          </li>
          <li>
            <a href='#' onClick={() => onFilter("Product Group 3")}>Product Group 3</a>  
          </li>
          <li>
            <a href='#' onClick={() => onFilter("Product Group 4")}>Product Group 4</a>  
          </li> */}
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