import React, { Component } from "react";

class PlanDetails extends Component {
  
  getPlanRecipes = () => {
    return this.props.plan.recipes.map(recipeId => {
      return this.props.recipes.find(r => r.id === recipeId.id) 
    })
  }
  
  render() { 
    return (
      <div>
        
        <h1>Start Date: {this.props.plan.start_date}</h1>
        {this.getPlanRecipes().map(recipe => {
          return <div>
                    <p>{recipe.name}</p>
                    </div>
        })}
  
      
      </div>
    );
  }
}
 
export default PlanDetails;