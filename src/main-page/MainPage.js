import React, { useState, useEffect } from 'react';

import Header from '../app-level/Header'
import NavBar from '../app-level/NavBar'
import ProductGrid from './ProductGrid'

const MainPage = ({products}) => {

  const [productFilter, setProductFilter] = useState("All Products");

  function filterProducts (filter) {
    setProductFilter(filter);
  }

  return (
    <div className="main-page" id="main-page">
      <Header/>
      <ProductGrid
        products={products}
        filter={productFilter}
      />
      <NavBar
        onFilter={filterProducts}
      />
    </div>
  );
};
  
  export default MainPage;