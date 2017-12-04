import React from "react"

class NewBidForm extends React.Component {
  constructor() {
    super()

    this.state = {
      currentBid: ''
    };

  }

  handleChange = (event) => {
    this.setState({currentBid: event.target.value})
  }

  render() {
    console.log(this.props)
    return (

      <form
        onSubmit={event => {event.preventDefault();
        console.log('bid placed');
        this.props.handleCreateBid(this.state.currentBid, this.props.auctionId);
      }}
        >
      <input
        type="text"
        placeholder="bid now"
        value={this.state.currentBid}
        name="bid now"
        onChange={this.handleChange}
      />
      <button type="submit">
        Place Bid
      </button>
    </form>
    )
  }
}

export default NewBidForm
