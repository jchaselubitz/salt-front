import React, { Component } from "react";
import { Button, Input, Form } from 'semantic-ui-react'

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
    console.log(event.target.name, event.target.value)
    if (
      ["ingredient_name", "qty", "unit", "ingredient_category"].includes(
        event.target.name
      )
    ) {
      let ingredients = [...this.state.ingredients];
      ingredients[event.target.dataset.id][event.target.name] =
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

  // ingredientOptions = () => { 
  //   return this.props.ingredients.map((ing, i) => console.log("option", ing) ({
  //     key: i,
  //     value: ing.name
  //   }))
  // }

  // unitOptions = () => { 
  //   return UNITS.map((unit, i) => ({
  //     key: i,
  //     text: unit,
  //     value: unit,
  //   }))
  // }

  // categoryOptions = () => { 
  //   return CATEGORY.map((category, i) => ({
  //     key: i,
  //     text: category,
  //     value: category,
  //   }))
  // }

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

                <Input list='Ingredients' placeholder='Choose an ingredient' />
                <datalist
                  id="Ingredients"
                  name="ingredient_name"
                  data-id={index}
                >
                  {this.props.ingredients.map(ing => (
                    <option value={ing.name} />
                  ))}
                </datalist>

             
                {/* ingredient qty */}
                <Form.Input
                  type="number"
                  data-id={index}
                  label="Qty"
                  placeholder="Quantity"
                  name="qty"
                  value={ingredient.qty}
                />

                {/* ingredient units */}
                {/* <input list="units" value={ingredient.unit} /> */}
                {/* <Form.Select  label='Unit' id="Units" placeholder='Unit' name="unit" data-id={index} options={this.unitOptions()} /> */}
             {/* WORKS UNTIL HERE */}

                {/* ingredient ingredient category */}
                {/* <Form.Select  label='Category'  placeholder='Category' name="ingredient_category" data-id={index} options={this.categoryOptions()} /> */}
              
               

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
