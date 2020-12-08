import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";

import Header from '../app-level/Header'
import NavBar from '../app-level/NavBar'
import ProductGrid from './ProductGrid'

const MainPage = ({products, cart}) => {

  return (
    <div className="main-page" id="main-page">
      {/* <Header/> */}
      <ProductGrid
        products={products}
      />
      <NavBar
        cart={cart}
      />
    </div>
  );
};
  
  export default MainPage;