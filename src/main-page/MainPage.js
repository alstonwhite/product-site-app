import React from 'react';

import NavBar from '../app-level/NavBar'
import ProductGrid from './ProductGrid'

const MainPage = ({products}) => {

  return (
    <div className="main-page" id="main-page">
      <ProductGrid
        products={products}
      />
      <NavBar/>
    </div>
  );
};
  
  export default MainPage;