import React, { Component } from 'react';

const RecipeCard = props => {

  return (
    <div onClick={() => props.handleClick(props.mealPlan.id, "Plan")}>
      <h3>{props.mealPlan.start_date}</h3>
    </div>
  );
};

export default RecipeCard;