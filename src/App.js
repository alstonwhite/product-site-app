import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useDispatch } from "react-redux";
import './App.css';

import Header from './app-level/Header'
import MainPage from './main-page/MainPage'
import ProductPage from './product-page/ProductPage'
import CartPage from './cart-page/CartPage'
import fetchContentful from "./fetchContentful";

import { addItemCartR, upDateQtyCartR, removeItemCartR } from './redux/actions';


function App() {

  const [products, setProducts] = useState([]);
  const [sections, setSections] = useState([]);
  const dispatch = useDispatch();

  const addItemCart= (product) => {
    dispatch(addItemCartR(product));
  }

  const updateQtyCart = (product, qty) => {
    dispatch(upDateQtyCartR(product, qty));
  }

  const removeItemCart = (product) => {
    dispatch(removeItemCartR(product));
  }

  useEffect(() => {
    const products = [];
    const sections = [];
    fetchContentful().then(entries => {
      entries.forEach(entry => {
        // console.log(entry);
        if(entry.sys.contentType.sys.id==="product" && entry.fields.active) {
          entry.fields.id = entry.sys.id
          products.push(entry.fields);
        }
        if(entry.sys.contentType.sys.id==="productSection" && entry.fields.active) {
          entry.fields.id = entry.sys.id
          sections.push(entry.fields);
        }
      })
      // change order of items in array?
      setProducts(products);
      setSections(sections);
    });
  }, []);

  // youtube video background
  const iframe = () => {
    return {__html: '<iframe frameborder="0" height="100%" width="100%" src="https://www.youtube.com/embed/Hy3S2coYvo8?controls=0&autoplay=1&disablekb=1&loop=1&mute=1" frameborder="0"></iframe>'}
  }

  return (

    <Router>
      <div className="App">
        {/* <div className="background" dangerouslySetInnerHTML={iframe()}></div> */}
        {/* <button
          onClick={() => {
            document.cookie=("cart",JSON.stringify({cart:[]}))
            console.log(JSON.parse(document.cookie))
          }}  
        >
        Clear Cookies
        </button> */}
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
              onAdd={addItemCart}
            />
            }>
          </Route>
          <Route exact path="/cart">
            <CartPage
              onUpdate={updateQtyCart}
              onRemove={removeItemCart}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
