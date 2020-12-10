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
import fetchContentful from "./fetchContentful";

import testData from './testData'


function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addItemCart= (product) => {
    if (cart.find(x => x.id === product.id)) {
      cart.find(x => x.id === product.id).quantity++;
      setCart([...cart])
      document.cookie = ("cart",JSON.stringify(cart))
      // console.log(document.cookie);
    } else {
      product.quantity = 1;
      let newCart = [...cart, product]; 
      setCart(newCart);
      document.cookie = ("cart",JSON.stringify(newCart))
      // console.log(document.cookie);
    }
  }

  const updateQtyCart = (product, qty) => {
    cart[cart.findIndex(x => x.id === product.id)].quantity = parseInt(qty);
    setCart([...cart]);
    document.cookie = ("cart",JSON.stringify(cart));
    // console.log(document.cookie);
  }

  const removeItemCart = (product) => {
    let newCart = cart.filter(x => x.id !== product.id);
    setCart(newCart);
    document.cookie = ("cart",JSON.stringify(newCart));
    // console.log(document.cookie);
  }

  useEffect(() => {
    if (document.cookie) {
      // console.log(JSON.parse(document.cookie));
      setCart(JSON.parse(document.cookie));
    }
    const products = [];
    fetchContentful("product").then(entries => {
      entries.forEach(entry => {
        if(entry.sys.contentType.sys.id==="product" && entry.fields.active) {
          entry.fields.id = entry.sys.id
          products.push(entry.fields);
        }
      })
      // change order of items in array?
      // console.log(products);
      setProducts(products);
    });
  }, []);


  return (

    <Router>
      <div className="App">
        <button
          onClick={() => {
            document.cookie=("cart",JSON.stringify([]))
            console.log(document.cookie)
          }}  
        >
        Clear Cookies
        </button>
        <Header/>
      </div>

      <Switch>
          <Route exact path="/">
            <MainPage
              // products={testData}
              products={products}
              cart={cart}
            />
          </Route>
          <Route path="/category/:group" children={
            <MainPage
              // products={testData}
              products={products}
              cart={cart}
            />
            }>
          </Route>
          <Route path="/product/:id" children={
            <ProductPage
              // products={testData}
              products={products}
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
