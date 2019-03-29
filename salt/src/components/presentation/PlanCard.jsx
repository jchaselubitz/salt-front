import React, { Component } from 'react';
import {Card, Image } from 'semantic-ui-react'

const RecipeCard = props => {
  const start_date = new Date(props.mealPlan.start_date)
  const prettyDate = () => {
    let dayOfWeek =  ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]
    let monthName = ["January", "February", "March", "April", "May", "June",
                 "July", "August", "September", "October", "November", "December"]
    return `${dayOfWeek[start_date.getDay()-1]}, ${monthName[start_date.getMonth()-1]} ${start_date.getDate()}`

  }
  return (
    <Card onClick={() => props.handleClick(props.mealPlan.id, "Plan")}>
      <Card.Header>
        {prettyDate()}
      </Card.Header>
    </Card>
  );
};

export default RecipeCard;