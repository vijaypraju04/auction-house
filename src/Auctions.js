import React from 'react'
import {Link} from 'react-router-dom';

const Auctions = (props) => {
  console.log("Auctions props", props)
  const url = `/auction/${props.auction.id}`
  return (

    <Link to={url}>
    <div onClick={() => props.onAuctionSelect(props.auction)}>
        {props.auction.title}
        </div>
    </Link>
  )
}

export default Auctions;
