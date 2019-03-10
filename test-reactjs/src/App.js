import React, { Component } from 'react';
import './App.css';
import Checkout from './components/Checkout';
import Bag from './components/Bag';

class App extends Component {
  render() {
    return (
      <div>
        <Checkout />
      </div>
    );
  }
}

export default App;
