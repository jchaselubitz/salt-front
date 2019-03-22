import React, { Component } from "react";

const RecipeCard = props => {
  return (
    <div onClick={() => props.handleClick("Recipe")} value="Recipe">
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
