import React from 'react';

const BidWindow = ({bids}) => {
  const bidList = bids.map((bid) => {
    return(
    <li>
      {bid.amount}
      </li>
    )
  })
  return (
    <div className='Bid-Window'>
      Bids go Here
      {bidList}
    </div>
  )
}

export default BidWindow;
