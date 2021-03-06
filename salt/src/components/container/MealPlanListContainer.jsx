import React, { Component } from "react";
import ContainerNavComponent from "../presentation/ContainerNavComponent";
import PlanBlockList from "../presentation/PlanBlockList";
import CreatePlanForm from "../presentation/CreatePlanForm.jsx";

class MealPlanListContainer extends Component {
  state = {
    createNew: false
  };

  newPlan = () => {
    if (this.state.createNew === true) {
      return (
        <CreatePlanForm
          recipes={this.props.recipes}
          addNewPlan={this.props.addNewPlan}
        />
      );
    }
  };

  createFormShowHide = () => {
    if (this.state.createNew === false) {
      this.setState({ createNew: true });
    } else {
      this.setState({ createNew: false });
    }
  };

  render() {
    return (
      <div className="list-container">
        {/* <ContainerNavComponent />; */}
        <button onClick={this.createFormShowHide}>Create New</button>
        {this.state.createNew ? (
          this.newPlan()
        ) : (
          <PlanBlockList
            mealPlans={this.props.mealPlans}
            ShowPlanDetails={this.props.ShowPlanDetails}
            delete={this.props.delete}
          />
        )}
      </div>
    );
  }
}

export default MealPlanListContainer;
