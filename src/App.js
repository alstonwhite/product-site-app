import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import MainPage from './main-page/MainPage'
import ProductPage from './product-page/ProductPage'

import testData from './testData'


function App() {

  const [cart, setCart] = useState([]);

  const addCart= (product) => {
    console.log("Product:");
    console.log(product);
    console.log("Cart:");
    console.log(cart)
    setCart([...cart, product])
    // add qty field to product?
  }

  return (
    <Router>
      <div className="App">
      </div>

      <Switch>
          <Route exact path="/">
            <MainPage
              products={testData}
              cart={cart}
            />
          </Route>
          <Route path="/category/:group" children={
            <MainPage
              products={testData}
              cart={cart}
            />
            }>
          </Route>
          <Route path="/product/:id" children={
            <ProductPage
              products={testData}
              cart={cart}
              onAdd={addCart}
            />
            }>
          </Route>
        </Switch>

      </Router>
  );
}

export default App;
