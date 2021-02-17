import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

import Header from './components/Header'
import MainPage from './components/main-page/MainPage'
import ProductPage from './components/product-page/ProductPage'
import CartPage from './components/cart-page/CartPage'
import OrderSuccess from './components/success-page/OrderSuccess'
import fetchContentful from "./utils/fetchContentful";

function App() {

  const [products, setProducts] = useState([]);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetchContentful().then(({products, sections}) => {
      setProducts(products);
      setSections(sections);
    });
  }, []);

  return (

    <Router>
      <div className="App">
        <div className="background-img"></div>
        {/* Messing around with background vid vs img, you can ignore the below ! */}
        {/* <div className="background" >
          <iframe
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            src={'https://www.youtube.com/embed/Hy3S2coYvo8?controls=0&autoplay=1&loop=1&mute=1'}
            frameBorder="0"
          />
        </div> */}
        <Header/>
      <Switch>
          <Route exact path="/">
            <MainPage
              products={products}
              sections={sections}
            />
          </Route>
          <Route path="/category/:group" children={
            <MainPage
              products={products}
              sections={sections}
            />
            }>
          </Route>
          <Route path="/product/:id" children={
            <ProductPage
              products={products}
              sections={sections}
            />
            }>
          </Route>
          <Route exact path="/cart">
            <CartPage/>
          </Route>
          <Route exact path="/order-confirm">
            <OrderSuccess/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
