import React, { Component } from "react";

class ShoppingListContainer extends Component {
  state = {
    currentPlan: undefined
  };

  updateCurrentPlan = event => {
    console.log(event.target.value);
    // this.setState({
    //     currentPlan: event.target.value
    // })
  };

  render() {
    return (
      <div>
        <select onChange={this.updateCurrentPlan} name="plan">
          <option value="" disabled selected>
            select a meal plan
          </option>
          {this.props.plans.map(plan => (
            <option value={plan.start_date}> {plan.start_date} </option>
          ))}
        </select>
      </div>
    );
  }
}

export default ShoppingListContainer;
