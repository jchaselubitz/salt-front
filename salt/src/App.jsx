import React, { Component } from "react";
import { Menu } from 'semantic-ui-react'
import logo from "./logo.svg";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
// import { Redirect } from "react-router-dom";
import "./App.css";
import MainNavContainer from "./components/container/MainNavContainer";
import LibraryContainer from "./components/container/LibraryContainer";
import MealPlanListContainer from "./components/container/MealPlanListContainer";
import RecipeContainer from "./components/container/RecipeContainer";
import PlanContainer from "./components/container/PlanContainer";
import ShoppingListContainer from "./components/container/ShoppingListContainer";
import SettingsContainer from "./components/container/SettingsContainer";
import Home from "./components/container/Home";
import Login from "./components/Login";
import API from "./api";
import PlanRecipeExtractor from "./components/PlanRecipeExtractor";

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
    this.setUser();
  }

  //================================== ROUTER =============================================
  SetPage = label => {
    this.props.handleClick(label);
  };

  logInOut = () => {
    if (this.props.currentUserStatus) {
      return <button onClick={() => this.props.logout()}>Log Out</button>;
    } else {
      return <button onClick={() => this.props.login()}>Log In</button>;
    }
  };

  // routing = (
  //   <Router>
  //     <div>
  //       <nav>
  //         <button onClick={() => this.SetPage("Home")}>
  //           <Link to={"/"} className="nav-link">
  //             {" "}
  //             Home{" "}
  //           </Link>
  //         </button>
  //         <button>
  //           <Link to={"/login"} className="nav-link">
  //             {" "}
  //             Login{" "}
  //           </Link>
  //         </button>
  //         ;
  //         {/* <button onClick={() => this.SetPage("Library")}>Library</button>
  //         <button onClick={() => this.SetPage("Recipe")}>Recipe</button>
  //         <button onClick={() => this.SetPage("Plans")}>Plans</button>
  //         {this.logInOut()}
  //         <button onClick={() => this.SetPage("List")}>Shopping List</button>
  //        */}
  //       </nav>
  //       <Route exact path="/" component={App} />
  //       <Route path="/login" component={Login} />
  //     </div>
  //   </Router>
  // );

  //============================= LOGIN/AUTH ==============================================

  setUser = () => {
    API.getProfile().then(userObject => {
      if (userObject.error) {
        this.logout();
        this.showLoginForm(); //ROUTE: Login
      } else {
        this.setState({ currentUser: userObject.user });
        API.getRecipes().then(recipes => this.setState({ recipes }));
        API.getIngredients().then(ingredients =>
          this.setState({ ingredients })
        );
        API.getPlans().then(plans => this.setState({ plans }));

        //this.props.history.push("/");
      }
    });
  };

  showLoginForm = () => {
    this.setState({
      currentMainContainer: "Login"
    });
  };

  renderRedirect = () => {
    if (this.state.currentUser) {
      return <Redirect to="/" />;
    }
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
    window.location.reload();
  };

  //============================= DRAW APPLICATION ==============================================

  // displayMainCont = () => {
  //   switch (this.state.currentMainContainer) {
  //     case "Home":
  //       return <Home />;
  //     case "Login":
  //       return <Login setUser={this.setUser} />;
  //     case "Library":
  //       return (
  //         <LibraryContainer
  //           recipeAddButton={this.recipeAddButton}
  //           recipes={this.state.recipes}
  //           ShowCardDetails={this.ShowCardDetails}
  //         />
  //       );
  //     case "Recipe":
  //       return (
  //         <RecipeContainer
  //           addNewRecipe={this.addNewRecipe}
  //           ingredients={this.state.ingredients}
  //           recipe={this.findSelectedRecipe()}
  //           recipeBackButton={this.recipeBackButton}
  //         />
  //       );
  //     case "Plans":
  //       return (
  //         <MealPlanListContainer
  //           recipes={this.state.recipes}
  //           mealPlans={this.state.plans}
  //           addNewPlan={this.addNewPlan}
  //           ShowPlanDetails={this.ShowPlanDetails}
  //         />
  //       );
  //     case "Plan":
  //       return (
  //         <PlanContainer
  //           plans={this.state.plans}
  //           plan={this.findSelectedPlan()}
  //           recipes={this.state.recipes}
  //           addNewPlan={this.addNewPlan}
  //           planBackButton={this.planBackButton}
  //         />
  //       );
  //     case "List":
  //       return (
  //         <ShoppingListContainer
  //           mealPlans={this.state.plans}
  //           recipes={this.state.recipes}
  //           updateIngredient={this.updateIngredient}
  //           ingredients={this.state.ingredients}
  //         />
  //       );
  //     case "Settings":
  //       return <SettingsContainer />;
  //     default:
  //       return <Home />;
  //   }
  // };

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
    this.props.history.push("/recipe");
  };

  recipeBackButton = () => {
    // if (this.state.currentMainContainer === "Recipe") {
    //   this.changeMainContState("Library");
    // }
    this.props.history.goBack();
  };

  planBackButton = () => {
    // if (this.state.currentMainContainer === "Plan") {
    //   this.changeMainContState("Plans");
    // }
    this.props.history.goBack();
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
    return selectedPlanArray;
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
      headers: { "Content-Type": "application/json", Authorization: localStorage.getItem("token")},
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

  //Needs to toggle in State AND send change to DB
  updateIngredient = ingredient => {
    let newArray = this.state.ingredients.filter(
      ing => ing.id !== ingredient.id
    );
    newArray = [...newArray, ingredient];
    this.setState({
      ingredients: newArray
    });
    API.updateIngredient(ingredient).then(resp => console.log(resp));
  };


        
  render() {
    return (
      <div className="App">
      <Menu className="Link" >
        {/* <MainNavContainer
            handleClick={this.NavController}
            currentUserStatus={!!this.state.currentUser}
            login={this.showLoginForm}
            logout={this.logout}
          /> */}

        {this.state.currentUser ? (
          <Menu.Item>
          <NavLink to="/login" onClick={() => this.logout()} className="Link">
            Logout
          </NavLink>
          </Menu.Item>

        ) : (
          <Menu.Item>
          <NavLink to="/login"  className="Link" > Login </NavLink>
          </Menu.Item>
        )}
        <Menu.Item>
        <NavLink  className="Link" to="/"> Home </NavLink>
        </Menu.Item>
        <Menu.Item>
        <NavLink className="Link" to="/library"> Library </NavLink>
        </Menu.Item>
        <Menu.Item> 
        <NavLink className="Link" to="/plans"> Meal Plans </NavLink>
        </Menu.Item>
        <Menu.Item> 
        <NavLink className="Link" to="/list"> shopping list </NavLink>
        </Menu.Item>
        <Menu.Item> 
        <NavLink className="Link" to="/settings"> settings </NavLink>
        </Menu.Item>
        </Menu>
        <div>
          <Route
            exact
            path="/"
            render={() =>
              !this.state.currentUser ? <Redirect to="/login" /> : <Home />
            }
          />

          <Route
            path="/library"
            component={() => (
              <LibraryContainer
                recipeAddButton={this.recipeAddButton}
                recipes={this.state.recipes}
                ShowCardDetails={this.ShowCardDetails}
              />
            )}
          />

          <Route
            exact path={`/recipe/:recipeId`}
            component={() => (
              <RecipeContainer
                addNewRecipe={this.addNewRecipe}
                ingredients={this.state.ingredients}
                recipe={this.findSelectedRecipe()}
                recipeBackButton={this.recipeBackButton}
              />
            )}
          />

          <Route
            exact path={`/recipe`}
            component={() => (
              <RecipeContainer
                addNewRecipe={this.addNewRecipe}
                ingredients={this.state.ingredients}
                recipe={this.findSelectedRecipe()}
                recipeBackButton={this.recipeBackButton}
              />
            )}
          />

          <Route
            exact
            path="/plans"
            component={() => (
              <MealPlanListContainer
                recipes={this.state.recipes}
                mealPlans={this.state.plans}
                addNewPlan={this.addNewPlan}
                ShowPlanDetails={this.ShowPlanDetails}
              />
            )}
          />

          <Route
            exact
            path={`/plan/:planId`}
            component={() => (
              <PlanContainer
                planBackButton={this.planBackButton}
                plans={this.state.plans}
                plan={this.findSelectedPlan()}
                recipes={this.state.recipes}
              />
            )}
          />

          <Route
            exact
            path="/list"
            component={() => (
              <ShoppingListContainer
                mealPlans={this.state.plans}
                recipes={this.state.recipes}
                updateIngredient={this.updateIngredient}
                ingredients={this.state.ingredients}
              />
            )}
          />

          <Route exact path="/settings" component={SettingsContainer} />

          <Route
            path="/login"
            render={() =>
              this.state.currentUser ? (
                <Redirect to="/" />
              ) : (
                <Login setUser={this.setUser} />
              )
            }
          />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
