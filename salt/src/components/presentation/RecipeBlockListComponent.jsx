import React, { Component } from "react";
import RecipeCard from "./RecipeCard";

//BREADCRUMBS
// app > library > RecipeContainer
// app > MealPlanListContainer > CreatePlanForm

//NOTES
// the handleClick callback below will split into its two paths
// at in the parents of this card: CreatePlanForm, and Library

class RecipeBlockListComponent extends Component {
  state = {};

  render() {
    return (
      <div>
        {this.props.recipes.map(recipe => (
          <RecipeCard
            recipe={recipe}
            handleClick ={this.props.handleClick}
          />
        ))}
      </div>
    );
  }
}

export default RecipeBlockListComponent;
