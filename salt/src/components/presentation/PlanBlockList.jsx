import React, { Component } from "react";
import PlanCard from "./PlanCard";
import { Link } from "react-router-dom";

class PlanBlockList extends Component {
  state = {};

  render() {
    return (
      <div>
        {this.props.mealPlans.map(mealPlan => (
          <Link to={`/plan/${mealPlan.id}`}>
            <PlanCard
              mealPlan={mealPlan}
              handleClick={this.props.ShowPlanDetails}
            />
          </Link>
        ))}
      </div>
    );
  }
}

export default PlanBlockList;
