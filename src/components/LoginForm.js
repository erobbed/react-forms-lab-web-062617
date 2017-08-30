import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = (event) => (event.target.name === "username") ? this.setState({username: event.target.value}) : this.setState({password: event.target.value})

  submitHandler = (event) => {
    event.preventDefault(),
    ( this.state.username.length > 1 && this.state.password.length > 1 ) ? this.props.submitHandler() : null
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.value} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.value} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
