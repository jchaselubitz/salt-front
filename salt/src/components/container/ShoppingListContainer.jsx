import React, { Component } from "react";

class ShoppingListContainer extends Component {
  state = {
    currentPlan: undefined
  };
  render() {
    return (
      <div>
        <select name="plan">
          {this.props.plans.map(plan => (
            <option value={plan.start_date}> {plan.start_date} </option>
          ))}
        </select>
      </div>
    );
  }
}

export default ShoppingListContainer;
