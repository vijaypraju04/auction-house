import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = props => {
  console.log("navbar props", props)
  
  const token = localStorage.getItem('token');

  const currentUser = props.currentUser;
  const loggedIn = props.loggedIn;

  return (
    <div className={`ui top fixed inverted ${props.color} menu`}>
      <Link to="/" className="item">
        <h2 className="ui header">
          <i className={`${props.icon} icon`} />
          <div className="content">Auctioneer, Mediocrity incarnate!</div>
          <div className="sub header">{props.description}</div>
        </h2>
      </Link>
      <div className="right menu">
        {loggedIn ? (
          <a>Welcome {currentUser.user.username}</a>
        ) : <a>please sign in</a>}
        {loggedIn ? (
          <a className="item">
            <button
              onClick={() => {
                props.handleLogout();
                props.history.push('/login');
              }}
              className="ui primary button"
            >
              Sign Out
            </button>
          </a>
        ) : (
          <Link to="/login" className="item">
            <div className="ui primary button">Sign In</div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default withRouter(Navbar);
