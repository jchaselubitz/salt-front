import React, { Component } from "react";

const RecipeCard = props => {
  return (
    <div>
      <img
        className="recipe_img"
        src={props.recipe.image}
        alt={props.recipe.name}
      />
      <h1>{props.recipe.name}</h1>
      <p>{props.recipe.instructions}</p>
    </div>
  );
};

export default RecipeCard;
