import React, { Component } from 'react'
import './LogStyle.css'
import { Link } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      passKey: ''
    }
  }

  //submit username
  addValue = event => {
    this.setState({ value: event.target.value })
  }

  //submit password
  addPassword = event => {
    this.setState({ passKey: event.target.value })
  }

  render() {
    return (
      <div>
        <form class="login-form">
          <h1>Let's Get Started</h1>
          <input
            type="text"
            name=""
            placeholder="Username"
            onChange={this.addValue}
            value={this.state.value}
          />
          <input
            type="password"
            name=""
            placeholder="Password"
            onChange={this.addPassword}
            value={this.state.passKey}
          />
          <input type="submit" name="" value="Login" />
          <h4 className="join">
            Don't have an account? <br /> Create one
            <Link className="register" to={`./Pages/Registration`}>
              Here!
            </Link>
          </h4>
        </form>
      </div>
    )
  }
}

export default Login
