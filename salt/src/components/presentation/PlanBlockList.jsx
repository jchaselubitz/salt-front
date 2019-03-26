import React, { Component } from "react";
import PlanCard from "./PlanCard";

class PlanBlockList extends Component {
  state = {};

  handleClick = () => {
    console.log("plan click")
  }

  render() {
    return (
      <div>
       {this.props.mealPlans.map(mealPlan => (
          <PlanCard
          mealPlan={mealPlan}
            handleClick ={this.handleClick}
          />
       ))}
      </div>
  )
}
}

export default PlanBlockList;
