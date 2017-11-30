import React from 'react';
import BidWindow from './BidWindow.js'

const AuctionDetail = ({auction}) => {
  if(!auction) {
    return <div>Loading.......</div>;
  }
  return(
    <div>
    <div>
      <h1>{auction.title}</h1>
      <p>{auction.description}</p>

    </div>
    <BidWindow
      bids={auction.bids}/>
    </div>
  )
}

export default AuctionDetail;
