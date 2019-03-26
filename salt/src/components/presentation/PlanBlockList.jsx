import React, { Component } from "react";
import PlanCard from "./PlanCard";

class PlanBlockList extends Component {
  state = {};


  render() {
    return (
      <div>
       {this.props.mealPlans.map(mealPlan => (
          <PlanCard
          mealPlan={mealPlan}
            handleClick={this.props.ShowPlanDetails}
          />
       ))}
      </div>
  )
}
}

export default PlanBlockList;
