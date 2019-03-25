import React, { Component } from 'react';


const Login = (props) => {
  return ( 
    <div>
      <h2>Log In</h2>
      <form onSubmit={props.login}>
       <input type="text" name="email"/>
       <input type="text" name="password"/>
       <input type="submit"/>
      </form>
    </div>
   );
}
 
export default Login;

