import React from 'react';

const Logout = (props) => {
  return(
    <div
      onClick={() => props.logUserOut()}
      className="ui primary button">
        Sign Out
    </div>
  )
}

export default Logout
