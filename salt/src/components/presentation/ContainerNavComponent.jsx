import React, { Component } from "react";

class ContainerNavComponent extends Component {
  state = {};
  render() {
    return (
      <>
        <span>
          <button onClick={this.props.backButton}> Back </button>
          <button onClick={this.props.addButton}>+</button>
        </span>
      </>
    );
  }
}

export default ContainerNavComponent;
