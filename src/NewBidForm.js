import React from "react"
import { Input, Label, Button } from 'semantic-ui-react'

class NewBidForm extends React.Component {
  constructor(props) {
    super(props)


    this.state = {
      currentBid: ''
    };

  }

  handleChange = (event) => {
    this.setState({currentBid: event.target.value})
  }

  render() {
    console.log(this.props.currentUserID)
    return (
      <form
        onSubmit={event => {event.preventDefault();
        console.log('bid placed');
        this.props.handleCreateBid(this.state.currentBid, this.props.auctionId, this.props.currentUserID);
      }}
        >
  <Input labelPosition='right' type='text' placeholder='Amount'>
    <Label basic>$</Label>
      <input
        type="text"
        placeholder="bid now"
        value={this.state.currentBid}
        name="bid now"
        onChange={this.handleChange}
      />
      <Label>.00</Label>
    </Input>
    <span>
      <Button type="submit">
        Place Bid
      </Button>
    </span>
    </form>
    )
  }
}

export default NewBidForm
