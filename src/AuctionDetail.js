import React from 'react';
import BidWindow from './BidWindow.js'
import NewAuctionForm from './NewAuctionForm.js';
import NewBidForm from './NewBidForm.js'

const AuctionDetail = ({auction, onSubmit, handleCreateBid}) => {
  if(!auction) {
    return <div>Loading.......</div>;
  }
  return(
    <div>
    <div>
      <h1>{auction.title}</h1>
      <p>{auction.description}</p>

      <div>
        <NewBidForm
          handleCreateBid={handleCreateBid}
          auctionId={auction.id}
        />
      </div>

    </div>
    <BidWindow
      bids={auction.bids}/>
    </div>
  )
}

export default AuctionDetail;
