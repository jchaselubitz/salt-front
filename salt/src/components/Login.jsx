import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import API from "../api";

class Login extends Component {
  state = {  }

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
      this.props.setUser()
    };
    //ROUTE: Homescreen
  };

  render() { 
    return ( 
    <div className='account-form-container'>
      <h2>Log In</h2>
      <Form onSubmit={this.login}>
      <Form.Field>
      <label>Email Address:</label>
       <input type="text" name="email"/>
      </Form.Field>
      <Form.Field>
      <label>Password:</label>
       <input type="text" name="password"/>
      </Form.Field>
       <Button value="submit">Log In</Button>
      </Form>
    </div> 
    );
  }
}
 
export default Login;