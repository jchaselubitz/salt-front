import React, { Component } from "react";
import PlanCard from "./PlanCard";
import {Card} from 'semantic-ui-react'

class PlanBlockList extends Component {
  state = {};


  render() {
    return (
      <Card.Group >
       {this.props.mealPlans.map(mealPlan => (
          <PlanCard
            mealPlan={mealPlan}
            handleClick={this.props.ShowPlanDetails}
          />
       ))}
      </Card.Group>
  )
}
}

export default PlanBlockList;
