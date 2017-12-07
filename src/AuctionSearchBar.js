import React from 'react';
import { Form } from 'semantic-ui-react'

const AuctionSearchBar = (props) => {
  return (
  <div>
    <Form>
   <Form.Field>
     <label>Auction Filter</label>
    <input
      className='Search'
      onChange={(e) => props.handleSearchTerm(e.target.value)}
      placeholder={"Search Auctions"}
      type='text' />
    </Form.Field>
</Form>
    </div>
  )
}

export default AuctionSearchBar;
