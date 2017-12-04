import React from 'react'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value

    })
  }


  handleSubmit = (e) => {
    e.preventDefault()
    this.props.fetchUser(this.state)
  }

  render() {
    return <div>
      <form onSubmit={this.handleSubmit}>
        username: <input name="username" type="text" onChange={this.handleChange}/>
        password: <input name="password" type="text" onChange={this.handleChange}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  }
}

export default Login
