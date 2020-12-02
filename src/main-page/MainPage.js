import React, { useState, useEffect } from 'react';
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

const MainPage = ({products, filter="All Products"}) => {

  const [productFilter, setProductFilter] = useState(filter);

  function filterProducts (filter) {
    setProductFilter(filter);
  }

  return (
    <div className="main-page" id="main-page">
      <Header/>
      <ProductGrid
        products={products}
        filter={filter}
      />
      <NavBar
        onFilter={filterProducts}
      />
    </div>
  );
};
  
  export default MainPage;