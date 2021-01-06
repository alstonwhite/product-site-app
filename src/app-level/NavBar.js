import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = ({sections}) => {

  const cart = useSelector(state => state.cart); 
  let cartItems = cart ? cart.reduce((sum, cur) => sum + cur.quantity, 0) : 0;
  let cartValue = cart ? cart.reduce((sum, cur) => sum + cur.price * cur.quantity, 0) : 0;

  const [open, setOpen] = useState(false); 

  return (
    <div className="nav">
      <button 
        aria-expanded={open} 
        aria-controls="nav-list"
        onClick={()=>setOpen(!open)}  
      >
        <span class="open">☰</span>
        <span class="close">×</span>
        Menu
      </button>
      <Link to="/cart" className = "nav__cart-content btn">
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
        {sections && sections.map(section => (
          <li>
            <Link
                to={"/category/"+section.slug}
                className = "nav__item"
            >
              {section.sectionTitle}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    );
  };
  
  export default NavBar;