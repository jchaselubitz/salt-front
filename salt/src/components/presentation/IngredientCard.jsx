import React, { Component } from 'react';
 

class IngredientCard extends Component {
  state = {  }

  handleClick = (ingredient) => {
    if (ingredient.have === false) {
      ingredient.have = true
    } else {
      ingredient.have = false
    }
    console.log(ingredient.have)
    this.props.updateIngredient(ingredient)
  }

  renderIngredient = (ingredientId) => {
    return this.props.ingredientObjects.find(ingredient => ingredient.id === ingredientId)
  }

  render() { 
    return ( 
    <div className="ingredient-card" onClick={() => this.handleClick(this.renderIngredient(this.props.ingredientId))} >
      <h3> {this.renderIngredient(this.props.ingredientId).name} </h3>
      <p>{this.renderIngredient(this.props.ingredientId).have === true ? "true" : "false"}</p>
    </div> );
  }
}
 
export default IngredientCard;