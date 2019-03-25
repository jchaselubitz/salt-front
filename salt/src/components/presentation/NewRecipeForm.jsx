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

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  //   updateCategory = event => {
  //     // this.setState({
  //     //   sortBy: event.target.value
  //     // });
  //     console.log(event.target.value);
  //   };

  //   updateUnit = event => {
  //     // this.setState({
  //     //   sortBy: event.target.value
  //     // });
  //     console.log(event.target.value);
  //   };
  //   updateQty = event => {
  //     // this.setState({
  //     //   sortBy: event.target.value
  //     // });
  //     console.log(event.target.value);
  //   };
  //   update = event => {
  //     // this.setState({
  //     //   sortBy: event.target.value
  //     // });
  //     console.log(event.target.value);
  //   };

  addIngredient = event => {
    event.preventDefault();
    this.setState({
      ingredients: [...this.state.ingredients, ""]
    });
  };

  handleIngredientChange = (event, index) => {
    let ingredients = [...this.state.ingredients];
    ingredients[index] = event.target.value;
    // this.state.ingredients[index] = event.target.value;

    this.setState({
      ingredients: ingredients
    });
  };

  removeIngredient = index => {
    this.state.ingredients.splice(index, 1);

    this.setState({
      ingredients: this.state.ingredients
    });
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

          <h2>Ingredients</h2>
          {this.state.ingredients.map((ingredient, index) => {
            return (
              <div key={index}>
                <input
                  list="ingredient_name"
                  value={ingredient}
                  onChange={event => this.handleIngredientChange(event, index)}
                />
                <datalist id="ingredient_name" name="name">
                  {this.props.ingredients.map(ing => (
                    <option value={ing.name} />
                  ))}
                </datalist>

                <button onClick={() => this.removeIngredient(index)}>
                  Remove
                </button>
              </div>
            );
          })}
          <button onClick={this.addIngredient}>Add Ingredient</button>

          {/* <label>Ingredient</label>
          <br />
          <input
            list="ingredient_name"
            name="ingredient_name"
            label="Ingredient Name"
          />

          <datalist id="ingredient_name" onChange={this.updateIngredientName}>
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
