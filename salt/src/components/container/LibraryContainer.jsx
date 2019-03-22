import React, { Component } from "react";
import ContainerNavComponent from "../presentation/ContainerNavComponent";
import RecipeBlockListComponent from "../presentation/RecipeBlockListComponent";

class LibraryContainer extends Component {
  state = {};
  render() {
    return (
      <div>
        <ContainerNavComponent />
        <BlockListComponent />
      </div>
    );
  }
}

export default LibraryContainer;
