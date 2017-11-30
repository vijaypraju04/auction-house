import React from 'react';

const AuctionDetail = ({auction}) => {
  if(!auction) {
    return <div>Loading.......</div>;
  }
  return(
    <div>
      <h1>{auction.title}</h1>
      <p>{auction.description}</p>
    </div>
  )
}

export default AuctionDetail;
