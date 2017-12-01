import React from 'react';
import logo from './logo.svg';
import './App.css';

const Header = () => {
  return (
    <div className="App">
      <header className="App-header" color="blue">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
          Welcome to Auctioneer
        </h1>
          <h4 className='App-title'>
            Where Mediocrity is our goal!
          </h4>
      </header>
      <p className="App-intro">
        To get started, edit <code>REALITY</code> and save to reload.
      </p>
    </div>
  )
}

export default Header;
