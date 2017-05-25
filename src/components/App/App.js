import React, { Component } from 'react';
import Items from '../../containers/Items';
import './App.css';
import ShoppingCart from '../../containers/ShoppingCart';

export default class App extends Component {

  render() {
    return(
      <div className="App-mainbody">
        <Items />
        <ShoppingCart />
      </div>
    )
  }
}