import React from 'react';
import Auth from './Auth.js';

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      error: false,
      fields: {
        username: '',
        password: ''
      }
    };
  }


  handleChange = (e) => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };


  handleSubmit = (e) => {
    e.preventDefault();
    Auth.login(this.state.fields).then(res => {
      if (!res.error) {
        const updatedState = { ...this.state.auth, user: res };
        this.props.handleLogin(res);
        this.props.history.push('/');
      } else {
        this.setState({ error: true });
      }
    });
  };


  render() {
    return <div>
      <form onSubmit={
        console.log('hi you'),
        this.handleSubmit}>
        username: <input
          name="username"
          type="text"
          value={this.state.fields.username}
          onChange={this.handleChange}/>
        password: <input
          name="password"
          type="text"
          type="password"
          placeholder="password"
          value={this.state.fields.password}
          onChange={this.handleChange}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  }
}

export default Login
