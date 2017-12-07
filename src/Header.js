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
      <img src={logo} className="App-logo" alt="logo" />
        <Link to="/login" className="item">
              <div className="ui primary button">Sign In</div>
            </Link>
        <Link to="/users/new" className="item">
              <div className="ui primary button">Register</div>
            </Link>
       <Link to="/auction/new" className="item">
            <div className="ui primary button">List a New Auction</div>
       </Link  >

        <h1 className="App-title">
          Welcome to Auctioneer
        </h1>
      </header>
    </div>
  )
}

export default Header;
