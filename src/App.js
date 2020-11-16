import React, { useState, useEffect } from 'react';
import './App.css';

import logo from './logo.svg';

import MainPage from './main-page/MainPage'

import testData from './testData'


function App() {

  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <MainPage
        products={testData}
      />
    </div>
  );
}

export default App;
