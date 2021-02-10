import React from 'react';

import NavBar from '../NavBar'
import ProductGrid from './ProductGrid'

const MainPage = ({products, sections}) => {

  return (
    <div className="main-page" id="main-page">
      <NavBar
        sections={sections}
      />
      <ProductGrid
        products={products}
      />
    </div>
  );
};
  
  export default MainPage;