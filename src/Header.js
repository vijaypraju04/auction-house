import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login.js';
import { Link, withRouter } from 'react-router-dom';

const Header = props => {
  console.log("HEADER PROPS", props.match.params)
  return (
    <div className="App">
      <header className="App-header" color="green">
        <Link to="/login" className="item">
              <div className="ui primary button">Sign In</div>
            </Link>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
          Welcome to Auctioneer
        </h1>
      </header>
    </div>
  )
}

export default Header;
