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

  return (
    <Router>
      <div className="App">
      </div>

      <Switch>
          <Route exact path="/">
            <MainPage
              products={testData}
            />
          </Route>
          <Route path="/category/:group" children={
            <MainPage
              products={testData}
            />
            }>
          </Route>
          <Route path="/product/:id" children={
            <ProductPage
              products={testData}
            />
            }>
          </Route>
        </Switch>

      </Router>
  );
}

export default App;
