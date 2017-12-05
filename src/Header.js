import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login.js';
import { Link, withRouter } from 'react-router-dom';

const Header = props => {
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
      <Link to="/login" className="item">
            <div className="ui primary button">Sign In</div>
          </Link>
    </div>
  )
}

export default Header;
