import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import AuctionList from './AuctionList.js';
// import BidWindow from './BidWindow.js';
import AuctionSearchBar from './AuctionSearchBar.js';
import AuctionDetail from './AuctionDetail.js';
import NewAuctionForm from './NewAuctionForm.js';
import NewBidForm from './NewBidForm.js'
import Login from './login.js'
import Auth from './Auth.js';
import Navbar from './Navbar.js'
import { withRouter } from 'react-router-dom'
import NewUserForm from './NewUserForm.js'


class App extends Component {
// const API_LINK = 'http://localhost:3000//api/v1/auctions'

constructor(){
  super()

  this.state = {
    auctions: [],
    searchTerm: '',
    selectedAuction: null,
    newAuction: {},
    newUser: {},
    isLoggedIn: false,
    users: [],
    auth: {
      user: {}
      }
  }
  // this.updateAuctions = this.updateAuctions.bind(this)
}

componentDidMount(){
  this.fetchAuctions()
  this.getUsers()
  const token = localStorage.getItem('token');
    if (token) {

      // make a request to the backend and find our user
      Auth.currentUser()
      .then(user => {
        // debugger
        const updatedState = { ...this.state.auth, user: user };
        this.setState({ isLoggedIn: true, auth: updatedState });

      });
    }
  }

  getUsers = () => {
    fetch('http://localhost:3000//api/v1/users')
      .then(res => res.json())
      .then(res => {
        const users = res;
        this.setState({
          users: res

        });
        console.log(users);
      });
      console.log(this.state);
  }

login = data => {
    this.setState({
      isLoggedIn: true,
      auth:{user: data}
    });
    localStorage.setItem('token', data.jwt);
  };

  logout = () => {
      localStorage.removeItem('token');
      this.setState({ isLoggedIn: false, auth: { user: {} } });
    };

fetchAuctions = () => {
    fetch('http://localhost:3000//api/v1/auctions')
    .then(res => res.json())
    .then(res => {
      const auctions = res;
      this.setState({
        auctions: res

      });
      console.log(auctions);
    });
    console.log(this.state);
}

fetchUser = (userData) => {
  console.log("fetch user", userData)
  fetch('http://localhost:3000//api/v1/login', {
    method: 'POST',
    headers: {
       Accepts: 'application/json, text/plain',
       'Content-Type': 'application/json'
      },
    body: JSON.stringify(userData)
  })
  .then(res => res.json())
  .then(res => console.log("login complete", res))

}

updateAuctions= () => {
    fetch('http://localhost:3000//api/v1/auctions')
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
  // console.log(this.state)
   let newList = this.state.auctions.filter(auction => {
     if(auction.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())){
       return auction
     }
   })
    return newList
 }
 createAuction = data => {
  fetch(`http://localhost:3000//api/v1/auctions`, {
    method: 'POST',
    headers: {
       Accepts: 'application/json, text/plain',

                'Content-Type': 'application/json'
      },
    body: JSON.stringify(data)
  })
  .catch(res => res.json())
  .then(res => console.log(res));
}
  // .catch(res => res.json());


createUser = data => {
 fetch(`http://localhost:3000/api/v1/users`, {
   method: 'POST',
   headers: {
      Accepts: 'application/json, text/plain',

               'Content-Type': 'application/json'
     },
   body: JSON.stringify(data)
 })
 .catch(res => res.json())
 .then(res => console.log(res));
}

postBid = (data, auctionId, userId) => {
  fetch(`http://localhost:3000//api/v1/bids`, {
    method: 'POST',
    headers: {
      Accepts: 'application/json, text/plain',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
      amount: data,
      user_id: userId,
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

handleCreateUser = userInfo => {
 console.log('user info', userInfo);
 this.createUser(userInfo)
 // .then(res => {
 //   console.log('res', res);
 // });
};

handleCreateBid = (bidInfo, auctionId, userId) => {
  this.postBid(bidInfo, auctionId, userId);

}



  render() {
    console.log("APP", this.props)
    if(this.state.auctions.length < 1){
      return <div> LOADING </div>
    }
    return (
      <div>

      <Route path="/" component={Header} />

    {/* this means header is everywhere */}

      <Route
        exact path="/login"
        render={(props) => {
          return (<Login {...props} handleLogin={this.login} fetchUser={this.fetchUser} />)
          }
        }
      />

      <Route path="/home" render={ () => {
          return (<div>
            <Navbar
                  color="green"
                  title="Painterest"
                  description="our app"
                  icon="paint brush"
                  currentUser={this.state.auth}
                  handleLogout={this.logout}
                  loggedIn={this.state.isLoggedIn}
                  handleLogin={this.login}
                  fetchUser={this.fetchUser}
                />
              <AuctionSearchBar
              searchTerm={this.state.searchTerm}
              handleSearchTerm={searchTerm => this.setState({searchTerm})}
              />
              {this.state.searchTerm}
              <AuctionList
                auctions={this.filterResults()}
                onAuctionSelect={selectedAuction => this.setState({selectedAuction})}
                />
          </div>)
        }
      }
    />
    <Route
      path ="/auction/new"
      render={(props) => {
        return(<NewAuctionForm {...props}
          handleCreateAuction={this.handleCreateAuction}
          currentUser={this.state.auth}
        />
      )
    }}
  />

    <Route path="/auction/:id" render={({match}) => {
      console.log(match)
      const auctionObj = this.state.auctions.find(auction => {
        return auction.id == match.params.id
      })

      console.log(this.state.auctions)
      console.log(auctionObj)

      return (
          <AuctionDetail
            auction={auctionObj}
            handleCreateBid={this.handleCreateBid}
            grabAuctionId={this.grabAuctionId}
            currentUser={this.state.auth}
            userList={this.state.users}
          />
        )
      }
    } />
      </div>
    );
  }
}

export default withRouter(App);
