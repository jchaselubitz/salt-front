import React, { Component } from "react";

//BREADCRUMBS
// app > library > RecipeContainer > RecipeBlockListComponent
// app > MealPlanListContainer > CreatePlanForm > RecipeBlockListComponent

//NOTES
//I made a bunch of changes to accomplish the following: 

  //This component is rendered by RecipeBlockListComponent, which
  // is CALLED FROM TWO PLACES:
  //  from recipe container
  //  from CreatePlanForm
  //  Therefore, callbacks in this card and in RecipeBlockContainer must be as generic as possible.


  // handleClick will have two jobs depending on where the card is presented:
  //  To open RecipeDetails
  //  To add the recipe to some object (probably just a Plan)
  //  the onClick event "handleClick" now has the arguments that all up-stream stuff needs

const RecipeCard = props => {

  return (
    <div onClick={() => props.handleClick(props.recipe.id, "Recipe")}>
      <img
        className="recipe_img"
        src={props.recipe.image}
        alt={props.recipe.name}
      />
      <h1>{props.recipe.name}</h1>
    </div>
  );
};

export default RecipeCard;
