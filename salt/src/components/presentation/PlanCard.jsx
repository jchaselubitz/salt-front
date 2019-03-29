import React, { Component } from "react";
import { Card } from "semantic-ui-react";

const RecipeCard = props => {
  return (
    <div onClick={() => props.handleClick(props.mealPlan.id, "Plan")}>
      {/* <Card>
        <Card.Content>
          <Card.Header>{props.mealPlan.start_date}</Card.Header>
        </Card.Content>
      </Card> */}
      <Card fluid color="blue" header={props.mealPlan.start_date} />
    </div>
  );
};

export default RecipeCard;
