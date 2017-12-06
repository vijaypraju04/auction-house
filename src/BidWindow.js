import React from 'react';
import Bid from './Bid.js';

const BidWindow = (props) => {
  const bidList = props.bids.map((bid) => {
    return(
      <Bid
        key={bid.id}
        bid={bid}
        currentUser={props.currentUser}
        users={props.users}
      />
    )
  })
  return (
    console.log(),
    <div className='Bid-Window'>
      Bids go Here
      {bidList}
    </div>
  )
}

export default BidWindow;
