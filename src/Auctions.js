import React from 'react'
import {Link} from 'react-router-dom';

const Auctions = (props) => {
  return (

    <Link to='/auctions/`${auction.id}`'>
    <div onClick={() => props.onAuctionSelect(props.auction)}>
        {props.auction.title}
        </div>
    </Link>
  )
}

export default Auctions;
