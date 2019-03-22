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

class App extends Component {
  state = {
    recipes: [],
    ingredients: [],
    plans: [],
    currentMainContainer: "Home"
  };

  displayMainCont = () => {
    switch (this.state.currentMainContainer) {
      case "Home":
        return <Home />;
      case "Library":
        return <LibraryContainer />;
      case "Recipe":
        return <RecipeContainer />;
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

  componentDidMount() {}
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
