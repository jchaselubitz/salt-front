//Experimental

import React, { Component } from "react";
import App from "../App.jsx";

const PlanRecipeExtractor = (plan) => {
  return ( 
    plan.recipes.map(recipeId => {
      return App.sendRecipes().find(r => r.id === recipeId.id) 
    })
   );
}
 
export default PlanRecipeExtractor;

