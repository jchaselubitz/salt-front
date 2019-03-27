import React, { Component } from "react";
import ContainerNavComponent from "../presentation/ContainerNavComponent";
import PlanDetails from "../presentation/PlanDetails";
import CreatePlanForm from "../presentation/CreatePlanForm";
import { Button, Card, Image } from 'semantic-ui-react'

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
        {this.props.plan ? 
        <PlanDetails plan={this.props.plan} recipes={this.props.recipes} />
        :
        <CreatePlanForm recipes={this.props.recipes} addNewPlan={this.props.addNewPlan} /> }
      </div>
    );
  }
}

export default PlanContainer;