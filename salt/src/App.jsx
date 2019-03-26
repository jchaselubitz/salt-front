import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainNavContainer from "./components/container/MainNavContainer";
import LibraryContainer from "./components/container/LibraryContainer";
import MealPlanListContainer from "./components/container/MealPlanListContainer";
import RecipeContainer from "./components/container/RecipeContainer";
import PlanContainer from "./components/container/PlanContainer";
import ShoppingListContainer from "./components/container/ShoppingListContainer";
import SettingsContainer from "./components/container/SettingsContainer";
import Home from "./components/container/Home";
import Login from "./components/container/Login";
import API from "./api";

class App extends Component {
  state = {
    currentUser: undefined,
    recipes: [],
    ingredients: [],
    plans: [],
    currentMainContainer: "Home",
    selectedRecipeId: undefined,
    selectedPlanId: undefined
  };

  componentDidMount() {
    API.getRecipes().then(recipes => this.setState({ recipes }));
    API.getIngredients().then(ingredients => this.setState({ ingredients }));
    API.getPlans().then(plans => this.setState({ plans }));
    API.getProfile()
      .then(userObject => {
        if (userObject.error) {
          // this.logout();
        } else {
          this.setUser(userObject);
          // this.props.history.push("/home");
        }
      });
  }

  //============================= LOGIN/AUTH ==============================================

  login = event => {
    event.preventDefault();
    API.loginPost(event.target.email.value, event.target.password.value).then(
      userObject => {
        loginSetUser(userObject);
      }
    );
    const loginSetUser = userObject => {
      // let userEmail = userObject.user.email;
      let token = userObject.token;
      localStorage.setItem("token", token);
      this.setState({ currentUser: userObject.user });
    };
  };

  setUser = userObject => {
    this.setState({ currentUser: userObject.user });
  };

  logout = () => {
    localStorage.removeItem("token");
    this.setState({ 
      recipes: [],
      ingredients: [],
      plans: [],
      currentMainContainer: "Home",
      selectedRecipeId: undefined,
      currentUser: undefined
    });
    window.location.reload()
  };

  showLoginForm = () => {
    this.setState({
      currentMainContainer: "Login"
    });
  };

  //============================= DRAW APPLICATION ==============================================

  displayMainCont = () => {
    switch (this.state.currentMainContainer) {
      case "Home":
        return <Home />;
      case "Login":
        return <Login login={this.login} />;
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
            addNewRecipe={this.addNewRecipe}
            ingredients={this.state.ingredients}
            recipe={this.findSelectedRecipe()}
            recipeBackButton={this.recipeBackButton}
          />
        );
      case "Plans":
        return (
          <MealPlanListContainer
            mealPlans={this.state.plans}
            addNewPlan={this.addNewPlan}
            ShowPlanDetails={this.ShowPlanDetails}

          />
        );
      case "Plan":
        return (
          <PlanContainer
            plans={this.state.plans}
            plan={this.findSelectedPlan()}
            recipes={this.state.recipes}
          />
        );
      case "List":
        return <ShoppingListContainer plans={this.state.plans} />;
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

  //============================= APP LOGIC ==============================================

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

  planBackButton = () => {
    if (this.state.currentMainContainer === "Plan") {
      this.changeMainContState("Plans");
    }
  };

  deselectRecipeId = containerLabel => {
    if (containerLabel === "Library") {
      this.setState({
        selectedRecipeId: undefined
      });
    }
  };

  ShowPlanDetails = (planId, label) => {
    this.selectedPlan(planId);
    this.changeMainContState(label);
  };


  selectedPlan = planId => {
    this.setState({
      selectedPlanId: planId
    });
  };

  findSelectedPlan = () => {
    if (this.state.selectedPlanId === undefined) return;
    let selectedPlanArray = this.state.plans.find(
      plan => plan.id === this.state.selectedPlanId
    );
    return selectedPlanArray
  };

  addNewPlan = planObject => {
    planObject.user_id = this.state.currentUser.id;
    API.createPlans(planObject).then(plan =>
      this.setState({
        plans: [...this.state.plans, plan]
      })
    );
  };

  addNewRecipe = recipe => {
    recipe.user_id = this.state.currentUser.id;

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recipe)
    };

    API.postRecipe(options).then(recipe => {
      recipe.ingredients.map(ing =>
        !this.state.ingredients.includes(ing.name)
          ? this.setState({ ingredients: [...this.state.ingredients, ing] })
          : null
      );
      this.setState({
        recipes: [...this.state.recipes, recipe],
        selectedRecipeId: recipe.id
      });
    });

    // .then(recipe =>
    //   this.setState({ recipes: [...this.state.recipes, recipe] })
    // );
  };

  render() {
    return (
      <div className="App">
        <MainNavContainer
          handleClick={this.NavController}
          currentUserStatus={!!this.state.currentUser}
          login={this.showLoginForm}
          logout={this.logout}
        />
        {this.displayMainCont()}
      </div>
    );
  }
}

export default App;
