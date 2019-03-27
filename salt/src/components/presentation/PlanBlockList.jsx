import React, { Component } from "react";
import PlanCard from "./PlanCard";
import { Link } from "react-router-dom";
import {Card} from 'semantic-ui-react'

class PlanBlockList extends Component {
  state = {};

  render() {
    return (
      <Card.Group >
        {this.props.mealPlans.map(mealPlan => (
          <Link to={`/plan/${mealPlan.id}`}>
            <PlanCard
              mealPlan={mealPlan}
              handleClick={this.props.ShowPlanDetails}
            />
          </Link>
        ))}
      </Card.Group>
    );
  }
}


export default PlanBlockList;
