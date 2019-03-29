import React, { Component } from "react";
import RecipeCard from "./RecipeCard";
import { Link } from "react-router-dom";
import { Grid, Segment } from "semantic-ui-react";

//BREADCRUMBS
// app > library > RecipeContainer
// app > MealPlanListContainer > CreatePlanForm

//NOTES
// the handleClick callback below will split into its two paths
// at in the parents of this card: CreatePlanForm, and Library

class RecipeBlockListComponent extends Component {
  state = {};

  render() {
    return (
      <div>
        <Grid doubling columns={5}>
          {this.props.recipes.map(recipe => (
            <Grid.Column>
          
                <RecipeCard
                  recipe={recipe}
                  handleClick={this.props.handleClick}
                />{" "}
      
            </Grid.Column>
          ))}
        </Grid>
      </div>
    );
  }
}

export default RecipeBlockListComponent;
