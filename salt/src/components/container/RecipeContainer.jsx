import React, { Component } from "react";
import ContainerNavComponent from "../presentation/ContainerNavComponent";
import RecipeDetails from "../presentation/RecipeDetails";
import NewRecipeForm from "../presentation/NewRecipeForm";

class RecipeContainer extends Component {
  state = {};

  renderRecipeCard = () => {};

  render() {
    return (
      <div>
        {/* <ContainerNavComponent /> */}
        <RecipeDetails recipe={this.props.recipe} />

        {/*  rendered conditionaly {<RecipeDetails /> 
                <NewRecipeForm /> } */}
      </div>
    );
  }
}

export default RecipeContainer;
