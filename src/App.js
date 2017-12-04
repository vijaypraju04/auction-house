import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import AuctionList from './AuctionList.js';
// import BidWindow from './BidWindow.js';
import AuctionSearchBar from './AuctionSearchBar.js';
import AuctionDetail from './AuctionDetail.js';
import NewAuctionForm from './NewAuctionForm.js';
import NewBidForm from './NewBidForm.js'


class App extends Component {
// const API_LINK = 'https://auction-back-end.herokuapp.com/api/v1/auctions'

constructor(){
  super()

  this.state = {
    auctions: [],
    searchTerm: '',
    selectedAuction: null,
    newAuction: {}
  }
  // this.updateAuctions = this.updateAuctions.bind(this)
}

componentDidMount(){
  this.fetchAuctions()
}

fetchAuctions(){
    fetch('https://auction-back-end.herokuapp.com/api/v1/auctions')
    .then(res => res.json())
    .then(res => {
      const auctions = res;
      this.setState({
        auctions: res,
        selectedAuction: res[0]
      });
      console.log(auctions);
    });
}

updateAuctions= () => {
    fetch('https://auction-back-end.herokuapp.com/api/v1/auctions')
    .then(res => res.json())
    .then(res => {
      const stateSelected = this.state.selectedAuction;
      const updatedSelected = res.filter(selected => selected.id === stateSelected.id)
      console.log(updatedSelected[0])
      this.setState({
        selectedAuction: updatedSelected[0]
      });
    });
}

filterResults = () => {
   let newList = this.state.auctions.filter(auction => {
     if(auction.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())){
       return auction
     }
   })
    return newList
 }
 createAuction = data => {
  fetch(`https://auction-back-end.herokuapp.com/api/v1/auctions`, {
    method: 'POST',
    headers: {
       Accepts: 'application/json, text/plain',

                'Content-Type': 'application/json'
      },
    body: JSON.stringify(data)
  })
  // .catch(res => res.json());
}

postBid = (data, auctionId) => {
  console.log(auctionId)
  fetch(`https://auction-back-end.herokuapp.com/api/v1/bids`, {
    method: 'POST',
    headers: {
      Accepts: 'application/json, text/plain',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
      amount: data,
      user_id: 3,
      auction_id: auctionId
  }
    )
  }).then(()=> this.updateAuctions())
}



handleCreateAuction = auctionInfo => {
 console.log(auctionInfo);
 this.createAuction(auctionInfo)
 // .then(res => {
 //   console.log('res', res);
 // });
};

handleCreateBid = (bidInfo, auctionId) => {
  this.postBid(bidInfo, auctionId);

}



  render() {
    return (
      <div>
        <Header />
        <AuctionSearchBar
        searchTerm={this.state.searchTerm}
        handleSearchTerm={searchTerm => this.setState({searchTerm})}
        />
        {this.state.searchTerm}

        <AuctionList
          auctions={this.filterResults()}
          onAuctionSelect={selectedAuction => this.setState({selectedAuction})}
          />
        <AuctionDetail
          auction={this.state.selectedAuction}
          handleCreateBid={this.handleCreateBid}
          grabAuctionId={this.grabAuctionId}
          />
        <NewAuctionForm
          handleCreateAuction={this.handleCreateAuction}/>
      </div>
    );
  }
}

export default App;
