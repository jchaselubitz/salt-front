import React, { Component } from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

//BREADCRUMBS
// app > library > RecipeContainer > RecipeBlockListComponent
// app > MealPlanListContainer > CreatePlanForm > RecipeBlockListComponent

//NOTES
//I made a bunch of changes to accomplish the following: 

  //This component is rendered by RecipeBlockListComponent, which
  // is CALLED FROM TWO PLACES:
  //  from recipe container
  //  from CreatePlanForm
  //  Therefore, callbacks in this card and in RecipeBlockContainer must be as generic as possible.


  // handleClick will have two jobs depending on where the card is presented:
  //  To open RecipeDetails
  //  To add the recipe to some object (probably just a Plan)
  //  the onClick event "handleClick" now has the arguments that all up-stream stuff needs

const RecipeCard = props => {

  return (
    <Card onClick={() => props.handleClick(props.recipe.id, "Recipe")}>
    <Image src={props.recipe.image} alt={props.recipe.name}/>
    <Card.Content>
      <Card.Header>{props.recipe.name}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='like' />
        22 likes
      </a>
    </Card.Content>
  </Card>
  );
};

export default RecipeCard;
