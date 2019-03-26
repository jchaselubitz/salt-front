import React, { Component } from "react";
import ContainerNavComponent from "../presentation/ContainerNavComponent";
import PlanDetails from "../presentation/PlanDetails";

// plan={this.state.recipes}
// mealPlans={this.findSelectedPlan()}
// recipes={this.state.recipes}

//BREADCRUMBS
// app 

class PlanContainer extends Component {
  state = {};
  
  render() {
    console.log(this.props.plan)
    return (
      <div>
        <ContainerNavComponent backButton={this.props.planBackButton} />
        <PlanDetails plan={this.props.plan} recipes={this.props.recipes} />
      </div>
    );
  }
}

export default PlanContainer;