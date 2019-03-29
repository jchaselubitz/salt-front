import React, { Component } from "react";
import { Button, Checkbox, Form, Grid } from "semantic-ui-react";
import RecipeCard from "./RecipeCard";
import { Link } from "react-router-dom";

class PlanDetails extends Component {
  getPlanRecipes = () => {
    return this.props.plan.recipes.map(recipeId => {
      return this.props.recipes.find(r => r.id === recipeId.id);
    });
  };

  render() {
    return (
      <div className="text-container">
        <Button
          onClick={() => this.props.delete(this.props.plan.id)}
          content="delete"
        />
        <Button
          onClick={() => this.props.edit(this.props.plan.id)}
          content="Edit"
        />
        <h3>Start Date: {this.props.plan.start_date}</h3>
        <Grid doubling columns={4}>
          {this.getPlanRecipes().map(recipe => (
            <Grid.Column>
              <Link to={`/recipe/${recipe.id}`}>
                <RecipeCard
                  recipe={recipe}
                  handleClick={this.props.handleClick}
                />{" "}
              </Link>
            </Grid.Column>
          ))}
        </Grid>
      </div>
    );
  }
}

export default PlanDetails;
