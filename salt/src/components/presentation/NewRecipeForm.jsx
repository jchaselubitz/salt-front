import React, { Component } from "react";
import { Button, Input, Form, Select} from 'semantic-ui-react'

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
    console.log(event.target, event.target.value)
    if (
      ["ingredient_name", "qty", "unit", "ingredient_category"].includes(
        event.target.name
      )
    ) {
      let ingredients = [...this.state.ingredients];
      ingredients[event.target.id][event.target.name] =
        event.target.value;
      this.setState({ ingredients });
    } else {
      this.setState({ [event.target.name]: event.target.value });
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

  removeIngredient = index => {
    this.state.ingredients.splice(index, 1);

    this.setState({
      ingredients: this.state.ingredients
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    let newRecipe = this.state;
    this.props.addNewRecipe(newRecipe);
  };

  ingredientOptions = () => { 
    return this.props.ingredients.map((ing, i) => console.log("option", ing) ({
      key: i,
      value: ing.name
    }))
  }

  unitOptions = () => { 
    return UNITS.map((unit, i) => ({
      key: i,
      text: unit,
      value: unit,
    }))
  }

  categoryOptions = () => { 
    return CATEGORY.map((category, i) => ({
      key: i,
      text: category,
      value: category,
    }))
  }

  render() {
    return (
      <Form className="text-container" onSubmit={this.handleFormSubmit} onChange={this.handleFieldChange} >
       <h1>New Recipe</h1>
        <Form.Group>
          <Form.Input
            
            label="Name"
            placeholder="Name"
            name="name"
            value={this.state.name}
          />
          <Form.Input
            type="url"
            
            label="image"
            placeholder="Image"
            name="image"
            value={this.state.image}
          />
          <Form.Input
            
            label="instructions"
            placeholder="Instructions"
            name="instructions"
            value={this.state.instructions}
          />
        </Form.Group>
          

        <h2>Ingredients</h2>
        <Form.Group>
          {this.state.ingredients.map((ingredient, index) => {
            return (
              <div key={index}>
                {/* ingredient name  */}
                {/* <Form.Input list="ingredient_name" data-id={index} name="ingredient_name" /> */}

                {/* <Form.Dropdown name="ingredient_name" id={index} search selection options={this.ingredientOptions()}/> */}
                <input
                  list="ingredient_name"
                  id={index}
                  name="ingredient_name"
                  //   value={ingredient.ingredient_name}
                />
                <datalist
                  id="ingredient_name"
                  name="ingredient_name"
                  id={index}
                >
                  {this.props.ingredients.map(ing => (
                    <option value={ing.name} />
                  ))}
                </datalist>

                {/* ingredient qty */}

                <input
                  type="number"
                  fluid
                  id={index}
                  label="Qty"
                  placeholder="Quantity"
                  name="qty"
                  value={ingredient.qty}
                />

                {/* ingredient units */}
                {/* <input list="units" value={ingredient.unit} /> */}
                <select  name="unit" id={index}>
                  <option value="" disabled selected>
                    units
                  </option>
                  {UNITS.map(unit => (
                    <option value={unit}>{unit}</option>
                  ))}
                </select>

                {/* ingredient ingredient category */}

                <select name="ingredient_category" id={index}>
                  <option value="" disabled selected>
                    Ingredient category
                  </option>
                  {CATEGORY.map(category => (
                    <option value={category}>{category}</option>
                  ))}
</select>

                  <Button onClick={() => this.removeIngredient(index)}>
                   Remove
                  </Button>
                  <Form.Field onClick={this.addIngredient} control={Button}>Add Ingredient</Form.Field>
              </div>
             )})}          
           </Form.Group>
           <Form.Field control={Button}>Submit</Form.Field>
       </Form>
    );
  }
}

export default NewRecipeForm;
