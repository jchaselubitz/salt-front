import React, { Component } from 'react';

//Tried to make this, but I am pretty sure you cannot set State via a callback function directly

class MainNavContainer extends Component {

   SetPage = (label) => {
     this.props.handleClick(label)
   }

   logInOut = () => {
     if (this.props.currentUserStatus) {
      return <button onClick={() => this.props.logout()}>Log Out</button>
     } else {
      return <button onClick={() => this.props.login()}>Log In</button>
     }
   }
  
  render() { 
    return (
      <>
      <span>
        <button onClick={() => this.SetPage("Home")}>Home</button>
        <button onClick={() => this.SetPage("Library")}>Library</button> 
        <button onClick={() => this.SetPage("Recipe")}>Recipe</button>
        <button onClick={() => this.SetPage("Plan")}>Plan</button>
        {this.logInOut()}
        {/* <button onClick={() => this.SetPage("List")}>List</button> */}
        {/* <button onClick={() => this.SetPage("Settings")}>Settings</button> */}
      </span>
      </>
     );
  }
}
 
export default MainNavContainer;