import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import './App.css';

import Header from './app-level/Header'
import MainPage from './main-page/MainPage'
import ProductPage from './product-page/ProductPage'
import CartPage from './cart-page/CartPage'
import fetchContentful from "./fetchContentful";

import { addItemCartR, upDateQtyCartR, removeItemCartR } from './redux/actions';


function App() {

  const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState([]);
  const cartR = useSelector(state => state.cart); 
  const dispatch = useDispatch();

  const addItemCart= (product) => {
    // if (cart.find(x => x.id === product.id)) {
    //   cart.find(x => x.id === product.id).quantity++;
    //   setCart([...cart])
    //   document.cookie = ("cart",JSON.stringify(cart));
    // } else {
    //   product.quantity = 1;
    //   let newCart = [...cart, product]; 
    //   setCart(newCart);
    //   document.cookie = ("cart",JSON.stringify(newCart))
    // }
    dispatch(addItemCartR(product))
    document.cookie = ("cart",JSON.stringify(cartR))
  }

  const updateQtyCart = (product, qty) => {
    // cart[cart.findIndex(x => x.id === product.id)].quantity = parseInt(qty);
    // setCart([...cart]);
    // document.cookie = ("cart",JSON.stringify(cart));
    dispatch(upDateQtyCartR(product, qty))
    document.cookie = ("cart",JSON.stringify(cartR))
  }

  const removeItemCart = (product) => {
    // let newCart = cart.filter(x => x.id !== product.id);
    // setCart(newCart);
    // document.cookie = ("cart",JSON.stringify(newCart));
    dispatch(removeItemCartR(product))
    document.cookie = ("cart",JSON.stringify(cartR))
  }

  // helper function to find product
  // helper function to update / pull cookie


  useEffect(() => {
    // if (document.cookie) {
    //   setCart(JSON.parse(document.cookie));
    // }
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
              cart={cartR}
            />
          </Route>
          <Route path="/category/:group" children={
            <MainPage
              // products={testData}
              products={products}
              cart={cartR}
            />
            }>
          </Route>
          <Route path="/product/:id" children={
            <ProductPage
              // products={testData}
              products={products}
              cart={cartR}
              onAdd={addItemCart}
            />
            }>
          </Route>
          <Route exact path="/cart">
            <CartPage
              cart={cartR}
              onUpdate={updateQtyCart}
              onRemove={removeItemCart}
            />
          </Route>
        </Switch>

      </Router>
  );
}

export default App;
