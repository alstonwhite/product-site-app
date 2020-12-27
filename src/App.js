import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useDispatch } from "react-redux";
import './App.css';

import Header from './app-level/Header'
import NavBar from './app-level/NavBar'
import MainPage from './main-page/MainPage'
import ProductPage from './product-page/ProductPage'
import CartPage from './cart-page/CartPage'
import fetchContentful from "./fetchContentful";

import { addItemCartR, upDateQtyCartR, removeItemCartR } from './redux/actions';


function App() {

  const [products, setProducts] = useState([]);
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
    fetchContentful("product").then(entries => {
      entries.forEach(entry => {
        if(entry.sys.contentType.sys.id==="product" && entry.fields.active) {
          entry.fields.id = entry.sys.id
          products.push(entry.fields);
          // add it field to contentful "fields"
        }
      })
      // change order of items in array?
      setProducts(products);
    });
  }, []);


  return (

    <Router>
      <div className="App">
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
            />
          </Route>
          <Route path="/category/:group" children={
            <MainPage
              products={products}
            />
            }>
          </Route>
          <Route path="/product/:id" children={
            <ProductPage
              products={products}
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
