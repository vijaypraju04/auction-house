import React from 'react';
import BidWindow from './BidWindow.js'
import NewAuctionForm from './NewAuctionForm.js';
import NewBidForm from './NewBidForm.js'
import Clock from './Clock.js'
import { Grid, Segment, Image, Header, Message } from 'semantic-ui-react'


const AuctionDetail = ({auction, onSubmit, handleCreateBid, currentUser, userList}) => {
  console.log("AUCTION", auction)
  if(!auction && currentUser) {
    return <div><h1>Welcome {currentUser.user.username}!
                  Please Log In and Select an Auction in order to place a bid!</h1>


    </div>;
  }


  return(
    <div>
    <div>
      <Segment inverted color="teal">
        <Header as="h3" block textAlign='center' inverted color='blue'>
      <h1>{auction.title}</h1>
    </Header>
      <Image src={auction.item} size='large' centered />
      <Header as='h3' block textAlign='center' inverted color='blue'> {auction.description} </Header>
    </Segment>
    <Segment color='black' inverted>
      <div>
        <Clock
          auctionEnd={auction.end_date}
        />
      </div>
    </Segment>

    <Segment>
      <div>
        <NewBidForm
          handleCreateBid={handleCreateBid}
          auctionId={auction.id}
          currentUserID={currentUser.user.id}
          currentUser={currentUser.user}
        />
      </div>
    </Segment>

    </div>
    <Segment>
    <BidWindow
      bids={auction.bids}
      users={userList}
    />
  </Segment>
    </div>
  )
}

export default AuctionDetail;
