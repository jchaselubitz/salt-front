import React, { Component } from "react";
import RowListComponent from "../presentation/RowListComponent";

class ShoppingListContainer extends Component {
  state = {
    currentPlanId: undefined,
    plan: undefined,
    shoppingList: [],
    have: []
    // shoppingList: [{name: '', qty: '', unit: ''}]
  };

  updateCurrentPlan = event => {
    this.setState(
      {
        currentPlanId: parseInt(event.target.value)
      },
      () => {
        this.findCurrentPlan();
      }
    );
  };

  findCurrentPlan = () => {
    if (this.state.currentPlanId === undefined) return;
    // console.log("FIND PLAN TOP");

    const currentPlan = this.props.plans.find(
      plan => plan.id === this.state.currentPlanId
    );
    console.log("PLAN:", currentPlan);
    this.generateRecipeList(currentPlan);
  };

  generateRecipeList = plan => {
    let planRecipes = plan.recipes.map(recipe => {
      return this.props.recipes.find(r => r.id === recipe.id);
    });
    this.generateIngredientList(planRecipes);
  };

  generateIngredientList = recipes => {
    recipes.map(recipe =>
      recipe.ingredients.map(ingredient =>
        // <RowListComponent ingredient={ingredient} />
        console.log(ingredient.name)
      )
    );
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
        {/* {this.generateIngredientList} */}
      </div>
    );
  }
}

export default ShoppingListContainer;
