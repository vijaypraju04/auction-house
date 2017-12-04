import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import AuctionList from './AuctionList.js';
// import BidWindow from './BidWindow.js';
import AuctionSearchBar from './AuctionSearchBar.js';
import AuctionDetail from './AuctionDetail.js';
import NewAuctionForm from './NewAuctionForm.js';


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

handleCreateAuction = auctionInfo => {
 console.log(auctionInfo);
 this.createAuction(auctionInfo)
 // .then(res => {
 //   console.log('res', res);
 // });
};

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
          onAuctionSelect={selectedAuction => this.setState({selectedAuction})
                                              }
          />
        <AuctionDetail
          auction={this.state.selectedAuction}
          />
        <NewAuctionForm
          handleCreateAuction={this.handleCreateAuction}/>
      </div>
    );
  }
}

export default App;
