import React, { Component } from "react";

const CATEGORY = [
  "Produce",
  "Frozen",
  "Canned Goods",
  "Oils",
  "Dairy",
  "Rice and Grains"
];
const UNITS = ["kg", "g", "oz", "lb", "tbs", "tps", "l", "ml", "can"];

class NewRecipeForm extends Component {
  state = {
    name: "",
    image: "",
    instructions: "",
    // ingredients: [{ name: "", qty: "", unit: "", category: "" }]
    ingredients: []
  };

  addIngredient = () => {
    this.setState(prevState => ({
      ingredients: prevState.ingredients.concat([
        {
          value: ""
        }
      ])
    }));
  };

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  updateCategory = event => {
    // this.setState({
    //   sortBy: event.target.value
    // });
    console.log(event.target.value);
  };

  updateUnit = event => {
    // this.setState({
    //   sortBy: event.target.value
    // });
    console.log(event.target.value);
  };
  updateQty = event => {
    // this.setState({
    //   sortBy: event.target.value
    // });
    console.log(event.target.value);
  };
  update = event => {
    // this.setState({
    //   sortBy: event.target.value
    // });
    console.log(event.target.value);
  };
  render() {
    return (
      <div>
        <h1>New Recipe</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleFieldChange}
          />
          <br />
          <input
            type="url"
            fluid
            label="image"
            placeholder="Image"
            name="image"
            value={this.state.image}
            onChange={this.handleFieldChange}
          />
          <br />
          <textarea
            fluid
            label="instructions"
            placeholder="Instructions"
            name="instructions"
            value={this.state.instructions}
            onChange={this.handleFieldChange}
          />
          <br />

          {/* <label>Ingredient</label>
          <br />
          <input
            list="ingredient_name"
            name="ingredient_name"
            label="Ingredient Name"
          />

          <datalist id="ingredient_name" inonChange={this.updateIngredientName}>
            {this.props.ingredients.map(ing => (
              <option value={ing.name} />
            ))}
          </datalist>
          <br />
          <label>Category</label>
          <select onChange={this.updateCategory}>
            {CATEGORY.map(category => (
              <option value={category}>{category}</option>
            ))}
          </select>
          <br />
          <input
            type="number"
            fluid
            label="Qty"
            placeholder="Quantity"
            name="qty"
            onChange={this.updateQty}
          />
          <br />
          <label>Unit</label>
          <select onChange={this.updateUnit}>
            {UNITS.map(unit => (
              <option value={unit}>{unit}</option>
            ))}
          </select>
          <br /> */}
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewRecipeForm;
