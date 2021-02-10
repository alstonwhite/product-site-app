import React from 'react';
import { Link } from "react-router-dom";

import logo from '../assets/particle-logo.png'

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
