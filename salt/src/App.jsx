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
    currentMainContainer: "Library",
    selectedRecipeId: undefined
  };

  componentDidMount() {
    API.getRecipes().then(recipes => this.setState({ recipes }));
    API.getIngredients().then(ingredients => this.setState({ ingredients }));
    API.getPlans().then(plans => this.setState({ MealPlanListContainer }));
  }

  displayMainCont = () => {
    switch (this.state.currentMainContainer) {
      case "Home":
        return <Home />;
      case "Library":
        return (
          <LibraryContainer
            recipes={this.state.recipes}
            selectedRecipe={this.selectedRecipe}
            changeMainContState={this.changeMainContState}
          />
        );
      case "Recipe":
        return (
          this.state.selectedRecipeId && (
            <RecipeContainer recipe={this.findSelectedRecipe()} />
          )
        );
      case "Plan":
        return <MealPlanListContainer />;
      case "List":
        return <ShoppingListContainer />;
      case "Settings":
        return <SettingsContainer />;
      default:
        return <Home />;
    }
  };

  changeMainContState = containerLabel => {
    this.setState({
      currentMainContainer: containerLabel
    });
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

  // ShowCardDetails = () = > {
  //   //change state.currentMainContainer
  //   //sends detail props to new container
  // }
  render() {
    return (
      <div className="App">
        {/* <MainNavContainer /> */}

        {this.displayMainCont()}
      </div>
    );
  }
}

export default App;
