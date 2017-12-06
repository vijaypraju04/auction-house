import React from 'react'
import {Link} from 'react-router-dom';
import Auth from './Auth.js';

const Bid = (props) => {
  const userName = props.users.filter(user => user.id === props.bid.user_id)



  return (

    console.log(userName[0].username),
    <div>
    {userName[0].username} - {props.bid.amount}

    </div>

  )
}

export default Bid;
