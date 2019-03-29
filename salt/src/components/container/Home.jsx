import React, { Component } from "react";
import welcome from "../images/Salt.png";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home_div">
        <img className="welcome" src={welcome} alt="welcome to salt" />
      </div>
    );
  }
}

export default Home;
