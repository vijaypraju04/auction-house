import React from 'react';

class NewAuctionForm extends React.Component {
  constructor(props){
    super(props);
    // console.log(this.props)

  this.state = {
    title: '',
    item: '',
    description: '',
    value: '',
    creator_id: ''
  };
}
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount = () => {
    console.log(this.props)
    this.setState({
      creator_id: this.props.currentUser.user.id
    })
  }

  // returnValue = (e) => {
  //   e.preventDefault()
  //   console.log(this.value)
  // }
render() {
  return (
    <form
      onSubmit={e => {e.preventDefault();
      console.log('submitted');
      this.props.handleCreateAuction(this.state);
    }}>
    <h3>List a New Auction</h3>
      <label>Title</label>
      <input
        type='text'
        placeholder='Item Title'
        value={this.state.title}
        name="title"
        onChange={this.handleChange}

        />
      <input
        type='text'
        placeholder='Image Link'
        value={this.state.item}
        name="item"
        onChange={this.handleChange}
        />
      <input
        type='text'
        placeholder='Item Description'
        value={this.state.description}
        name="description"
        onChange={this.handleChange}
        />
      <input
        type='text'
        placeholder='Item Value'
        value={this.state.value}
        name="value"
        onChange={this.handleChange}
        />
      <button
        type='submit'>
        List your Auction!
        </button>

    </form>

  )
}
}

export default NewAuctionForm
