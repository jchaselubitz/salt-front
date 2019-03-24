import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainNavContainer from "./components/container/MainNavContainer";
import LibraryContainer from "./components/container/LibraryContainer";
import MealPlanListContainer from "./components/container/MealPlanListContainer";
import RecipeContainer from "./components/container/RecipeContainer";
import ShoppingListContainer from "./components/container/ShoppingListContainer";
import SettingsContainer from "./components/container/SettingsContainer";
import Home from "./components/container/Home";
import API from "./api";

class App extends Component {
  state = {
    recipes: [],
    ingredients: [],
    plans: [],
    currentMainContainer: undefined,
    selectedRecipeId: undefined,
    currentUser: null
  };

  componentDidMount() {
    API.getRecipes().then(recipes => this.setState({ recipes }));
    API.getIngredients().then(ingredients => this.setState({ ingredients }));
    API.getPlans().then(plans => this.setState({ MealPlanListContainer }));
  }

// FOR LOGIN
  setCurrentUser = () => {
    API.getProfile()
    .then (resp => {
      this.setState({ currentUser: resp });
    })
  }

  displayMainCont = () => {
    switch (this.state.currentMainContainer) {
      case "Home":
        return <Home />;
      case "Library":
        return (
          <LibraryContainer
            recipeAddButton={this.recipeAddButton}
            recipes={this.state.recipes}
            ShowCardDetails={this.ShowCardDetails}
          />
        );
      case "Recipe":
        return (
          <RecipeContainer
            ingredients={this.state.ingredients}
            recipe={this.findSelectedRecipe()}
            recipeBackButton={this.recipeBackButton}
          />
        );
      case "Plan":
        return <MealPlanListContainer recipes={this.state.recipes} />;
      case "List":
        return <ShoppingListContainer />;
      case "Settings":
        return <SettingsContainer />;
      default:
        return <Home />;
    }
  };

  changeMainContState = containerLabel => {
    this.deselectRecipeId(containerLabel);
    this.setState({
      currentMainContainer: containerLabel
    });
  };

  NavController = label => {
    this.changeMainContState(label);
  };

  selectedRecipe = recipeId => {
    this.setState({
      selectedRecipeId: recipeId
    });
  };

  findSelectedRecipe = () => {
    if (this.state.selectedRecipeId === undefined) return;

    return this.state.recipes.find(
      recipe => recipe.id === this.state.selectedRecipeId
    );
  };

  ShowCardDetails = (recipeId, label) => {
    this.selectedRecipe(recipeId);
    this.changeMainContState(label);
  };

  recipeAddButton = () => {
    if (this.state.currentMainContainer === "Library") {
      this.changeMainContState("Recipe");
    }
  };

  recipeBackButton = () => {
    if (this.state.currentMainContainer === "Recipe") {
      this.changeMainContState("Library");
    }
  };

  deselectRecipeId = containerLabel => {
    if (containerLabel === "Library") {
      this.setState({
        selectedRecipeId: undefined
      });
    }
  };

  render() {
    return (
      <div className="App">
        <MainNavContainer handleClick={this.NavController} />
        {this.displayMainCont()}
      </div>
    );
  }
}

export default App;
