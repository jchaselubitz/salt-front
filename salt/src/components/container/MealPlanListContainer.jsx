import React, { Component } from "react";
import ContainerNavComponent from "../presentation/ContainerNavComponent";
import PlanBlockList from "../presentation/PlanBlockList";

class MealPlanListContainer extends Component {
  state = {};
  render() {
    return (
      <div>
        <ContainerNavComponent />;
        <PlanBlockList />
      </div>
    );
  }
}

export default MealPlanListContainer;
