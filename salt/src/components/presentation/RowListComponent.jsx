import React, { Component } from "react";
import IngredientCard from "./IngredientCard";

const RowListComponent = (props) => {
  return (
      <IngredientCard ingredientId={props.ingredientId}  ingredient={props.ingredient} updateIngredient={props.updateIngredient}/>
  )
  
};

export default RowListComponent;
