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

  // from paradise.nyc
  // <iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="0" height="0" src="https://www.youtube.com/embed/Peq1x4Dkigk?autoplay=1&amp;loop=0&amp;controls=0&amp;showinfo=0&amp;modestbranding=1&amp;fs=1&amp;cc_load_policy=0&amp;iv_load_policy=3&amp;autohide=0&amp;start=0&amp;playlist=Peq1x4Dkigk&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fparadise.nyc&amp;widgetid=1" id="widget2"></iframe>

  return (

    <Router>
      <div className="App">
        <div className="background-img"></div>
        {/* @Todd messing around with background vid vs img still, you can ignore the below !! */}
        {/* check if  mobile for vid vs img */}
        {/* <div className="background" dangerouslySetInnerHTML={iframe()}></div> */}
        {/* <div className="background" >
          <iframe
            style={{
              position: "absolute",
              top: 0,
              left: -20,
              width: "100%",
              height: "100%",
              border: "5px solid red",
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
