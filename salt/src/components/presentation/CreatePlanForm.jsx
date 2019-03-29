import React, { Component } from 'react';
import PlanRecipeBlockListComponent from './PlanRecipeBlockListComponent';

//BREADCRUMBS
// app > MealPlanListContainer

//NOTES
// the click event in RecipeCard stops here and executes AddRecipeToPlan

class CreatePlanForm extends Component {

  // startDate = new Date()
  // DEFAULT_STATE = {
  //   dateStart: new Date(),
  //   dateEnd: this.dateStart.setDate(this.dateStart.getDate() + 7)
  // }
  state = { 
    start_date: undefined,
    end_date: undefined,
    selectedRecipeIds:[]
   }
   // start_date should default to todays date
   // end should default to +7 days
   //NEED VALIDATION TO MAKE SURE END DATE IS MORE THAN ONE DAY AFTER START DATE
   handleFieldChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
   }

  AddRecipeToPlan = (recipeId) => {
    if (this.state.selectedRecipeIds.includes(recipeId)) {
      this.setState({ selectedRecipeIds: this.state.selectedRecipeIds.filter(rId => rId !== recipeId) });
    } else {
      this.setState({ selectedRecipeIds: [...this.state.selectedRecipeIds, recipeId]});
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addNewPlan({
      start_date: this.state.start_date,
      end_date: this.state.end_date,
      recipeIds: this.state.selectedRecipeIds
    })
  }

  render() { 
    return ( 
      <>
      <h2> Create a Plan </h2>
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label htmlFor="start_date">Start Date:</label><br/>
          <input type="date" name="start_date" value={this.state.start_date} onChange={this.handleFieldChange}/>
          <label htmlFor="end_date">End Date:</label><br/>
          <input type="date" name="end_date" value={this.state.end_date} onChange={this.handleFieldChange}/>
          <input type="submit"/>
        </form>
        <div>
          <PlanRecipeBlockListComponent recipes={this.props.recipes} handleClick={this.AddRecipeToPlan}/> 
        </div>
      </div>
      </>
     );
  }
}
 
export default CreatePlanForm;

