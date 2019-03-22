import React, { Component } from "react";
import RecipeCard from "./RecipeCard";

class RecipeBlockListComponent extends Component {
  state = {};

  // renderRecipeCard = () => {
  //   return this.props.recipes.map(recipe =>  <RecipeCard recipe={recipe} />)
  // }

  render() {
    return (
      <div>
        {this.props.recipes.map(recipe => (
          <RecipeCard recipe={recipe} handleClick={this.props.handleClick} />
        ))}
      </div>
    );
  }
}

export default RecipeBlockListComponent;
