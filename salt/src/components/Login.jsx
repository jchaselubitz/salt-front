import React, { Component } from "react";
import API from "../api";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {};

  login = event => {
    event.preventDefault();
    API.loginPost(event.target.email.value, event.target.password.value).then(
      userObject => {
        loginSetUser(userObject);
      }
    );
    const loginSetUser = userObject => {
      let token = userObject.token;
      localStorage.setItem("token", token);
      this.props.setUser();
    };
  };

  render() {
    return (
      <div>
        <h2>Log In</h2>
        <form onSubmit={this.login}>
          <input type="text" name="email" />
          <input type="text" name="password" />
          <button value="submit">Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;
