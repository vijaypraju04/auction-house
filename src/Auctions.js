import React from 'react'
import {Link} from 'react-router-dom';

const Auctions = (props) => {
  return (

    <div onClick={() => props.onAuctionSelect(props.auction)}>
        {props.auction.title}
        </div>
  )
}

export default Auctions;
