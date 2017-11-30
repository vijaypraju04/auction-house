import React from 'react'

const Auctions = ({auction, onAuctionSelect}) => {
  return (
    <div onClick={() => onAuctionSelect(auction)}>
        {auction.title}
        </div>
  )
}

export default Auctions;
