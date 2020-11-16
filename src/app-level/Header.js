import React from 'react';

import logo from '../logo.svg'

const Header = () => {

    return (
      <div className="header-container">
        <img alt='logo' className='logo logo-header' src={logo}/>
        <button
        className="cart-button"
        >
        Cart
        </button>
      </div>
    );
  };
  
  export default Header;

  // update logo img, should be wrapped in <a> link to return to home page (unfilter product grid)
  // cart button should display # of items and total value of cart items, should be <a> link not button
