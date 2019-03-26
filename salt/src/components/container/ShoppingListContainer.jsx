import React, { Component } from "react";
import RowListComponent from "../presentation/RowListComponent";

class ShoppingListContainer extends Component {
  state = {
    currentPlanId: undefined,
    plan: undefined,
    ingredientList: [],
    have: []

    // shoppingList: [{name: '', qty: '', unit: ''}]
  };

  updateCurrentPlan = event => {
    this.setState(
      {
        currentPlanId: parseInt(event.target.value)
      }
      //   () => {
      //     this.findCurrentPlan();
      //   }
    );
  };

  findCurrentPlan = () => {
    if (this.state.currentPlanId === undefined) return;

    const currentPlan = this.props.plans.find(
      plan => plan.id === this.state.currentPlanId
    );
    console.log("FIND PLAN TOP", currentPlan);
    this.generateRecipeList(currentPlan);
  };

  generateRecipeList = plan => {
    let planRecipes = plan.recipes.map(recipe => {
      return this.props.recipes.find(r => r.id === recipe.id);
    });
    // console.log("generate recipe list ", planRecipes);
    this.generateIngredientList(planRecipes);
  };

  generateIngredientList = recipes => {
    // console.log("generate ingredient list ", recipes);
    recipes.map(recipe =>
      recipe.ingredients.map(ingredient =>
        this.setState({
          ingredientList: [...this.state.ingredientList, ingredient]
        })
      )
    );
  };

  renderIngredientList = () => {
    this.state.ingredientList.map(ingredient => (
      <RowListComponent ingredient={ingredient} />
    ));
  };

  render() {
    const plans = this.props.plans.filter(plan => plan.recipes.length > 0);

    return (
      <div>
        <select onChange={this.updateCurrentPlan} name="plan">
          <option value={undefined} disabled selected>
            select a meal plan
          </option>
          {plans.map(plan => (
            <option value={plan.id}>{plan.start_date}</option>
          ))}
        </select>
        {this.state.ingredientList.length > 0 && this.renderIngredientList}
      </div>
    );
  }
}

export default ShoppingListContainer;
