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
    const products = [];
    const sections = [];
    fetchContentful().then(entries => {
      entries.forEach(entry => {
        if(entry.sys.contentType.sys.id==="product" && entry.fields.active) {
          entry.fields.id = entry.sys.id
          products.push(entry.fields);
        }
        if(entry.sys.contentType.sys.id==="productSection" && entry.fields.active) {
          entry.fields.id = entry.sys.id
          sections.push(entry.fields);
        }
      })
      setProducts(products);
      setSections(sections);
    });
  }, []);

  // expand video to frame so no whitespace, figure out loop + youtube-y parts on load 
  const iframe = () => {
    return {__html: '<iframe frameborder="0" height="100%" width="100%" src="https://www.youtube.com/embed/Hy3S2coYvo8?controls=0&autoplay=1&loop=1&mute=1" frameborder="0"></iframe>'}
  }

  return (

    <Router>
      <div className="App">
        {/* check if  mobile for vid vs img */}
        <div className="background-img"></div>
        {/* <div className="background" dangerouslySetInnerHTML={iframe()}></div> */}
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
