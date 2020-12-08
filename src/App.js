import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Header from './app-level/Header'
import MainPage from './main-page/MainPage'
import ProductPage from './product-page/ProductPage'
import CartPage from './cart-page/CartPage'

import testData from './testData'


function App() {

  const [cart, setCart] = useState([]);

  const addItemCart= (product) => {
    if (cart.find(x => x.id === product.id)) {
      cart.find(x => x.id === product.id).quantity++;
      setCart([...cart])
    } else {
      product.quantity = 1;
      setCart([...cart, product]);
    }
  }

  const updateQtyCart = (product, qty) => {
    cart[cart.findIndex(x => x.id === product.id)].quantity = qty;
    setCart([...cart])
  }

  const removeItemCart = (product) => {
    let newCart = cart.filter(x => x.id !== product.id);
    setCart(newCart);
  }


  return (
    <Router>
      <div className="App">
        <Header/>
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
              onAdd={addItemCart}
            />
            }>
          </Route>
          <Route exact path="/cart">
            <CartPage
              cart={cart}
              onUpdate={updateQtyCart}
              onRemove={removeItemCart}
            />
          </Route>
        </Switch>

      </Router>
  );
}

export default App;
