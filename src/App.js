import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import AuctionList from './AuctionList.js';
import BidWindow from './BidWindow.js';
import AuctionSearchBar from './AuctionSearchBar.js';
import AuctionDetail from './AuctionDetail.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AuctionSearchBar />

        <AuctionList />
        <AuctionDetail />
        <BidWindow />
      </div>
    );
  }
}

export default App;
