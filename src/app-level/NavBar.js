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
        className="nav-hamburger btn"
        aria-expanded={open} 
        aria-controls="nav-list"
        onClick={()=>setOpen(!open)}  
      >
        <span className="open">☰ Menu</span>
        <span className="close">x Menu</span>
      </button>
      <Link to="/cart" className = "nav__cart-content btn">
        <div className = "nav__cart-items">{`Cart: ${cartItems} items`}</div>
        <div className = "nav__cart-value">{` $${cartValue}`}</div>
      </Link>
      <ul>
        <li>
          <Link to="/" className = "nav__item">All Products</Link>
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