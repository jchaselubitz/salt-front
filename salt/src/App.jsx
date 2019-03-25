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
import Login from "./components/container/Login"
import API from "./api";

class App extends Component {
  state = {
    recipes: [],
    ingredients: [],
    plans: [],
    currentMainContainer: "Login",
    selectedRecipeId: undefined,
    currentUser: undefined
  };

  componentDidMount() {
    API.getRecipes().then(recipes => this.setState({ recipes }));
    API.getIngredients().then(ingredients => this.setState({ ingredients }));
    API.getPlans().then(plans => this.setState({ MealPlanListContainer }));
    API.getProfile()
    // .then (resp => console.log("getProfileResp:",resp))
    .then ( userObject => {
      
      if (userObject.error) {
          this.logout()
        } else {
          this.setUser(userObject)
          this.props.history.push('/home')
        }
      }
    )
  }

//============================= LOGIN/AUTH ==============================================

  login = (event) => {
    event.preventDefault()
    API.loginPost(event.target.email.value, event.target.password.value)
    .then(userObject => {loginSetUser(userObject);
    })
    const loginSetUser = (userObject) => {
      let userEmail = userObject.user.email
      let token = userObject.token
      localStorage.setItem('token', token)
      this.setState({ currentUser : userEmail })
    }
  }

  setUser = userObject => {
    this.setState({ currentUser : userObject.user.email })
  }  

  logout = () => {
    localStorage.removeItem('token', )
    this.setState({ currentUser: undefined  });
  }

  //============================= DRAW APPLICATIONS ==============================================

  displayMainCont = () => {
    switch (this.state.currentMainContainer) {
      case "Home":
        return <Home />;
      case "Login":
        return (
          <Login
            login={this.login}
          />
        );
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

  addNewPlan = (event) => {
    console.log("add Plan:", )
  }

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
