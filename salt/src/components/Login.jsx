import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import API from "../api";
import { Redirect } from "react-router-dom";
// import background from "../images/mike-kenneally-345257-unsplash.jpg";
import background from "./images/mike-kenneally-345257-unsplash.jpg";
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
      <div className="login_page">
        <div className="login_form">
          <h2>Log In</h2>
          <Form onSubmit={this.login}>
            <Form.Field>
              <label>Email Address:</label>
              <input type="text" name="email" />
            </Form.Field>
            <Form.Field>
              <label>Password:</label>
              <input type="text" name="password" />
            </Form.Field>
            <Button value="submit">Log In</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
