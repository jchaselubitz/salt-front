import React, { Component } from "react";
import ContainerNavComponent from "../presentation/ContainerNavComponent";
import RecipeDetails from "../presentation/RecipeDetails";
import NewRecipeForm from "../presentation/NewRecipeForm";

class RecipeContainer extends Component {
  state = {};
  render() {
    return (
      <div>
        <ContainerNavComponent />

        {/*  rendered conditionaly {<RecipeDetails /> 
                <NewRecipeForm /> } */}
      </div>
    );
  }
}

export default RecipeContainer;
