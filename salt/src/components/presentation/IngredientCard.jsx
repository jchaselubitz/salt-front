import React, { Component } from 'react';
 

class IngredientCard extends Component {
  state = {  }

  handleClick = (ingredient) => {
    ingredient.have === false ? ingredient.have = true : ingredient.have = false
    this.props.updateIngredient(ingredient)
  }


  render() { 
    return ( 
    <div className="ingredient-card" onClick={() => this.handleClick(this.props.ingredient)} >
      <h3> {this.props.ingredient.name} </h3>
      <p>{this.props.ingredient.have === true ? "true" : "false"}</p>
    </div> );
  }
}
 
export default IngredientCard;