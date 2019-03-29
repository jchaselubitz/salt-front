import React, { Component } from "react";
import PlanCard from "./PlanCard";
import { Link } from "react-router-dom";
import { Card, Grid } from "semantic-ui-react";

class PlanBlockList extends Component {
  state = {};

  render() {
    return (
      <div className="plan_list">
        <Card.Group>
          <Grid doubling columns={5}>
            {this.props.mealPlans.map(mealPlan => (
              <Grid.Column>
                <Link to={`/plan/${mealPlan.id}`}>
                  <PlanCard
                    mealPlan={mealPlan}
                    handleClick={this.props.ShowPlanDetails}
                  />
                </Link>
              </Grid.Column>
            ))}
          </Grid>
        </Card.Group>
      </div>
    );
  }
}

export default PlanBlockList;
