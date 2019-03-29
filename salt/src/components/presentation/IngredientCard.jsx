import React, { Component } from 'react';
import {Card, Image } from 'semantic-ui-react'

class IngredientCard extends Component {
  state = {  }

  handleClick = (ingredient) => {
    ingredient.have === false ? ingredient.have = true : ingredient.have = false
    this.props.updateIngredient(ingredient)
  }


  render() { 
    return ( 
     
      <Card fluid color={this.props.ingredient.have === false ? 'white' : 'blue'} onClick={(event) => this.handleClick(this.props.ingredient)} >
      {/* <Image floated='right' size='mini' src={this.props.ingredient.image} /> */}
         <Card.Header> {this.props.ingredient.name} </Card.Header>
        <Card.Meta>{this.props.ingredient.have === true ? "Have it" : "Time to get more"}</Card.Meta>
    </Card> 
   
    )
  }
}
 
export default IngredientCard;