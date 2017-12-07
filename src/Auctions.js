import React from 'react'
import {Link} from 'react-router-dom';
import { Image, Button, Segment } from 'semantic-ui-react'

const Auctions = (props) => {
  return (

    <Segment inverted>
        {props.auction.title}
        <Image src={props.auction.item} size='small' />
        <Button positive onClick={() => props.onAuctionSelect(props.auction)}> View Auction </Button>
      </Segment>
  )
}

export default Auctions;
