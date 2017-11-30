import React from 'react';

const AuctionSearchBar = (props) => {
  return (
    <input
      className='Search'
      onChange={(e) => props.handleSearchTerm(e.target.value)}
      placeholder={"Search your Recent Transactions"}
      type='text' />
  )
}

export default AuctionSearchBar;
