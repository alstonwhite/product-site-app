import React from 'react';

import NavBar from '../app-level/NavBar'
import ProductGrid from './ProductGrid'

const MainPage = ({products}) => {

  return (
    <div className="main-page" id="main-page">
      <NavBar/>
      <ProductGrid
        products={products}
      />
    </div>
  );
};
  
  export default MainPage;