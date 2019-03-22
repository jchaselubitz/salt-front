import React, { Component } from 'react';
import RecipeCard from "./RecipeCard";
import RecipeBlockListComponent from './RecipeBlockListComponent';

//BREADCRUMBS
// app > MealPlanListContainer

//NOTES
// the click event in RecipeCard stops here and executes AddRecipeToPlan

class CreatePlanForm extends Component {
  state = {  }

  AddRecipeToPlan = (recipeId) => {
    console.log("createPlanForm recipe ID:", recipeId)
  }

  render() { 
    return ( 
      <>
      <h2> Create a Plan </h2>
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="date" />
        </form>
        <div>
          <RecipeBlockListComponent recipes={this.props.recipes} handleClick={this.AddRecipeToPlan}/> 
        </div>
        {/* {this.props.recipes.map(recipe => (
            <RecipeCard
              recipe={recipe} */}
              // handleClick={this.props.AddRecipeToPlan}
              // handleContChange={this.props.handleContChange}
            />
          ))}
      </div>
      </>
     );
  }
}
 
export default CreatePlanForm;

