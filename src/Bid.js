import React from 'react'
import {Link} from 'react-router-dom';

const Bid = (props) => {
  return (
    console.log(props),
    <div>
    {props.bid.user_id} - {props.bid.amount}

    </div>

  )
}

export default Bid;
