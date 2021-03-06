import React, { Component } from "react";
import ContainerNavComponent from "../presentation/ContainerNavComponent";
import RecipeDetails from "../presentation/RecipeDetails";
import NewRecipeForm from "../presentation/NewRecipeForm";

//BREADCRUMBS
// app

class RecipeContainer extends Component {
  state = {};

  renderRecipeCard = () => {};
  

  render() {
    return (
      <div>
        <ContainerNavComponent backButton={this.props.recipeBackButton} />

        {this.props.recipe ? (
          <RecipeDetails recipe={this.props.recipe} />
        ) : (
          <NewRecipeForm
            addNewRecipe={this.props.addNewRecipe}
            ingredients={this.props.ingredients}
          />
        )}
        {/*  rendered conditionaly {<RecipeDetails /> 
                <NewRecipeForm /> } */}
      </div>
    );
  }
}

export default RecipeContainer;
