import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";

class ContainerNavComponent extends Component {
  state = {};
  render() {
    return (
      <>
        <Menu fluid widths={3}>
          <Menu.Item
            className="icon"
            icon="
            arrow left"
            onClick={this.props.backButton}
          />

          {/* <Menu.Item>
            <Input className="icon" icon="search" placeholder="Search..." />
          </Menu.Item> */}

          <Menu.Item
            className="icon"
            icon="plus"
            onClick={this.props.addButton}
          />

          {/* <button onClick={this.props.backButton}> Back </button>

          <button onClick={this.props.addButton}>+</button> */}
        </Menu>
      </>
    );
  }
}

export default ContainerNavComponent;
