import React, { Component } from "react";

const RecipeCard = props => {
  const handleClick = () => {
    props.selectedRecipe(props.recipe.id);
    props.handleContChange("Recipe");
  };

  return (
    <div onClick={handleClick} value="Recipe">
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
