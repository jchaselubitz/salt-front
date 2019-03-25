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
    ingredients: [
      { ingredient_name: "", qty: "", unit: "", ingredient_category: "" }
    ]
  };

  handleFieldChange = event => {
    if (
      ["ingredient_name", "qty", "unit", "ingredient_category"].includes(
        event.target.name
      )
    ) {
      let ingredients = [...this.state.ingredients];
      ingredients[event.target.dataset.id][
        event.target.name
      ] = event.target.value.toUpperCase();
      this.setState({ ingredients });
    } else {
      this.setState({ [event.target.name]: event.target.value.toUpperCase() });
    }
  };

  addIngredient = event => {
    event.preventDefault();
    this.setState({
      ingredients: [
        ...this.state.ingredients,
        { ingredient_name: "", qty: "", unit: "", ingredient_category: "" }
      ]
    });
  };

  //   handleIngredientChange = (event, index) => {
  //     let ingredients = [...this.state.ingredients];
  //     ingredients[index] = event.target.value;
  //     // this.state.ingredients[index] = event.target.value;

  //     this.setState({
  //       ingredients: ingredients
  //     });
  //   };

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
        <form
          onSubmit={this.handleFormSubmit}
          onChange={this.handleFieldChange}
        >
          <input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={this.state.name}
          />
          <br />
          <input
            type="url"
            fluid
            label="image"
            placeholder="Image"
            name="image"
            value={this.state.image}
          />
          <br />
          <textarea
            fluid
            label="instructions"
            placeholder="Instructions"
            name="instructions"
            value={this.state.instructions}
          />
          <br />

          <h2>Ingredients</h2>
          {this.state.ingredients.map((ingredient, index) => {
            return (
              <div key={index}>
                {/* ingredient name  */}
                <input
                  list="ingredient_name"
                  data-id={index}
                  name="ingredient_name"
                  //   value={ingredient.ingredient_name}
                />
                <datalist
                  id="ingredient_name"
                  name="ingredient_name"
                  data-id={index}
                >
                  {this.props.ingredients.map(ing => (
                    <option value={ing.name} />
                  ))}
                </datalist>

                {/* ingredient qty */}

                <input
                  type="number"
                  fluid
                  data-id={index}
                  label="Qty"
                  placeholder="Quantity"
                  name="qty"
                  value={ingredient.qty}
                />

                {/* ingredient units */}
                {/* <input list="units" value={ingredient.unit} /> */}
                <select id="units" name="unit" data-id={index}>
                  <option value="" disabled selected>
                    units
                  </option>
                  {UNITS.map(unit => (
                    <option value={unit}>{unit}</option>
                  ))}
                </select>

                {/* ingredient ingredient category */}

                <select name="ingredient_category" data-id={index}>
                  <option value="" disabled selected>
                    Ingredient category
                  </option>
                  {CATEGORY.map(category => (
                    <option value={category}>{category}</option>
                  ))}
                </select>

                <button onClick={() => this.removeIngredient(index)}>
                  Remove
                </button>
              </div>
            );
          })}
          <button onClick={this.addIngredient}>Add Ingredient</button>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewRecipeForm;
