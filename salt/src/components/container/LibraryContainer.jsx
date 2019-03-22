import React, { Component } from "react";
import ContainerNavComponent from "../presentation/ContainerNavComponent";
import RecipeBlockListComponent from "../presentation/RecipeBlockListComponent";

class LibraryContainer extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* <ContainerNavComponent /> */}
        <h1>Library</h1>
        <RecipeBlockListComponent recipes={this.props.recipes} />
      </div>
    );
  }
}

export default LibraryContainer;
