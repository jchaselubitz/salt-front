import React, { Component } from "react";

const RecipeDetails = props => {
  return (
    <div>
      <img
        className="recipe_img"
        src={props.recipe.image}
        alt={props.recipe.name}
      />
      <h1>{props.recipe.name}</h1>
      {props.recipe.ingredients.map(ing => (
        <p>
          {ing.name}, {ing.recipe_qty_ingredients[0].qty}{" "}
          {ing.recipe_qty_ingredients[0].unit}
        </p>
      ))}
      <p>{props.recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetails;
