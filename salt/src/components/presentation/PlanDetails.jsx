import React, { Component } from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react';

class PlanDetails extends Component {
  
  getPlanRecipes = () => {
    return this.props.plan.recipes.map(recipeId => {
      return this.props.recipes.find(r => r.id === recipeId.id) 
    })
  }

 
  
  render() { 
    return (
      <div className="text-container">
        <h3>Start Date: {this.props.plan.start_date}</h3>
        {this.getPlanRecipes().map(recipe => {
          return <div>
                    <p>{recipe.name}</p>
                    
                    </div>
        })}
        
        <Button onClick={() => this.props.delete(this.props.plan.id)} content="delete" />
        <Button onClick={() => this.props.edit(this.props.plan.id)} content="Edit" />

      </div>
    );
  }
}
 
export default PlanDetails;