import React from 'react';
import BidWindow from './BidWindow.js'
import NewAuctionForm from './NewAuctionForm.js';
import NewBidForm from './NewBidForm.js'
import Clock from './Clock.js'

const AuctionDetail = ({auction, onSubmit, handleCreateBid, currentUser, userList}) => {
  if(!auction) {
    return <div><h1>Please Log In and Select an Auction in order to Proceed</h1></div>;
  }

  return(
    <div>
    <div>
      <h1>{auction.title}</h1>
      <img src={auction.item} alt="" />
      <p>{auction.description}</p>
      <div>
        <Clock
          auctionEnd={auction.end_date}
        />
      </div>
      <div>
        <NewBidForm
          handleCreateBid={handleCreateBid}
          auctionId={auction.id}
          currentUserID={currentUser.user.id}
          currentUser={currentUser.user}
        />
      </div>

    </div>
    <BidWindow
      bids={auction.bids}
      users={userList}
    />
    </div>
  )
}

export default AuctionDetail;
