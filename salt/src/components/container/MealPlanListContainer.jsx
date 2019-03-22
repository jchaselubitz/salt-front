import React, { Component } from "react";
import ContainerNavComponent from "../presentation/ContainerNavComponent";
import PlanBlockList from "../presentation/PlanBlockList";
import CreatePlanForm from "../presentation/CreatePlanForm.jsx"


//NOTES
//plans needed before we can uncomment <PlanBlockList />


class MealPlanListContainer extends Component {
  state = {
    createNew: false
  };

  newPlan = () => {
    if (this.state.createNew === true) {
      return <CreatePlanForm recipes={this.props.recipes}/>
    }
  }

  createFormShowHide = () => {
    if (this.state.createNew === false) {
      this.setState({ createNew: true  });
    } else {
      this.setState({ createNew: false  });
    }
  }


  render() {
    return (
      <div>
        {/* <ContainerNavComponent />; */}
        {/* <PlanBlockList /> */}
        <button onClick={this.createFormShowHide}>Create New</button>
        {this.newPlan()}
      </div>
    );
  }
}

export default MealPlanListContainer;
