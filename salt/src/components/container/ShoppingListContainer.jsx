import React, { Component } from "react";
import RowListComponent from "../presentation/RowListComponent";
import { Card } from "semantic-ui-react";
import IngredientCard from "../presentation/IngredientCard"

class ShoppingListContainer extends Component {
  state = {
    currentPlanId: undefined,
    plan: undefined,
    ingredientList: undefined
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

    const currentPlan = this.props.mealPlans.find(
      plan => plan.id === this.state.currentPlanId
    );
    this.generateRecipeList(currentPlan);
  };

  generateRecipeList = plan => {
    let planRecipes = plan.recipes.map(recipe => {
      return this.props.recipes.find(r => r.id === recipe.id);
    });
    this.generateIngredientList(planRecipes);
  };

  generateIngredientList = recipes => {
    let newArray = []
    recipes.map(recipe =>
      recipe.ingredients.map(ingredient =>
        newArray = [...newArray, ingredient.id]
      )
    );
    this.setState({
      ingredientList: newArray
    });
  };

  findIngredient = (ingredientId) => {
      return this.props.ingredients.find(ingredient => ingredient.id === ingredientId)
  };

  renderIngredientList = () => {
    return this.state.ingredientList.map(ingredientId => (
      <IngredientCard ingredient={this.findIngredient(ingredientId)}  updateIngredient={this.props.updateIngredient}/>
    ))
  }

  render() {
    const plans = this.props.mealPlans.filter(plan => plan.recipes.length > 0);

    return (
      <>
      <div className="text-container">
        <select onChange={this.updateCurrentPlan} name="plan">
          <option value={undefined} disabled selected>
            select a meal plan
          </option>
          {plans.map(plan => (
            <option value={plan.id}>{plan.start_date}</option>
          ))}
        </select>
      </div>
      <Card.Group>
        {this.state.ingredientList && this.renderIngredientList()}
      </Card.Group>
      
      </>
    );
  }
}

export default ShoppingListContainer;
