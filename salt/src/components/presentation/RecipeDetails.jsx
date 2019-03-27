import React, { Component } from "react";
import { Image, List } from 'semantic-ui-react'

const RecipeDetails = props => {
  return (
    <div>
      <Image
        src={props.recipe.image}
        alt={props.recipe.name} fluid
      />
      <div className="text-container">
      <h1>{props.recipe.name}</h1>
      <List>{props.recipe.ingredients.map(ing => (
        <List.Item>
          {ing.name}, {ing.recipe_qty_ingredients[0].qty}{" "}
          {ing.recipe_qty_ingredients[0].unit}
          </List.Item>
      ))}</List>
      <p>{props.recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetails;
