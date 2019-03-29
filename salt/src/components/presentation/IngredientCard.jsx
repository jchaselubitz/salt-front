import React, { Component } from 'react';
import {Card, Image } from 'semantic-ui-react'

class IngredientCard extends Component {
  state = {  }

  handleClick = (event) => {
    console.log(event)
    // event.preventDefault()
    const {ingredient} = this.props
    this.props.updateIngredient(ingredient.id)
  }


  render() { 
    return ( 
     
      <Card fluid color={this.props.ingredient.have === false ? 'red' : 'blue'} onClick={this.handleClick} >
      {/* <Image floated='right' size='mini' src={this.props.ingredient.image} /> */}
         <Card.Header> {this.props.ingredient.name} </Card.Header>
        <Card.Meta>{this.props.ingredient.have === true ? "Have it" : "Time to get more"}</Card.Meta>
    </Card> 
   
    )
  }
}
 
export default IngredientCard;