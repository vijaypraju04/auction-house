import React from 'react';
import './App.css';
import AuctionSearchBar from './AuctionSearchBar.js';
import Auctions from './Auctions.js';

const AuctionList = ({auctions}) => {
  const auctionListItems = auctions.map((auction) => {
    return (
      <Auctions
        key={auction.id}
        auction={auction}
      />
    )
  });
  return (
    <div className='Auction-Listing'>
      <h4>
        List of Auction
        {auctionListItems}
      </h4>
    </div>
  )
}

export default AuctionList;
