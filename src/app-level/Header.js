import React from 'react';
import { Link } from "react-router-dom";

import logo from '../particle-logo.jpeg'

const Header = () => {

    return (
      <div className="header-container">
        <Link to="/">
          <img alt='logo' className='logo logo-header' src={logo}/>
        </Link>
      </div>
    );
  };
  
  export default Header;

  // update logo img, should be wrapped in <a> link to return to home page (unfilter product grid)
  // cart button should display # of items and total value of cart items, should be <a> link not button
