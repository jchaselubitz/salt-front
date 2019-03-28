const baseUrl = "http://localhost:3000/api/v001";
const recipeUrl = `${baseUrl}/recipes`;
const ingredientUrl = `${baseUrl}/ingredients`;
const planUrl = `${baseUrl}/calendars`;
const usersUrl = `${baseUrl}/user`;
const recipePlanUrl = `${baseUrl}/recipe_calendars`;
const recipeQtyIngredientsUrl = `${baseUrl}/recipe_qty_ingredients`;
const profileUrl = `${baseUrl}/profile`;
const loginUrl = `${baseUrl}/login`;

//============================= AUTH/LOGIN FUNCTIONS ==============================================

const loginPost = (email, password) => {
  return loginCall(loginUrl, email, password);
};

const loginCall = (url, email, password) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      user: {
        email: email,
        password: password
      }
    })
  };
  return fetch(url, options).then(resp => resp.json());
};

const getProfile = () => {
  return getFunction(profileUrl);
};

//============================= GET FUNCTIONS ==============================================

const getRecipes = () => {
  return getFunction(recipeUrl);
};

const getIngredients = () => {
  return getFunction(ingredientUrl);
};

const getPlans = () => {
  return getFunction(planUrl);
};

const getUsers = () => {
  return getFunction(usersUrl);
};

const getRecipePlans = () => {
  return getFunction(recipePlanUrl);
};

const getRecipeQtyIngredients = () => {
  return getFunction(recipeQtyIngredientsUrl);
};

const getFunction = url => {
  const options = {
    method: "GET",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  };
  return fetch(url, options)
  .then(resp => resp.json());

};

//============================= POST FUNCTIONS ==============================================

const createIngredients = () => {
  return postAndPostFunction(ingredientUrl);
};

const createPlans = planObject => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" ,
    Authorization: localStorage.getItem("token")},
    body: JSON.stringify({
      calendar: {
        user_id: planObject.user_id,
        start_date: planObject.start_date,
        end_date: planObject.end_date,
        recipes: planObject.recipeIds
      }
    })
  };
  return postAndPostFunction(planUrl, options);
};

const createUsers = () => {
  return postAndPostFunction(usersUrl);
};

const createRecipePlans = () => {
  return postAndPostFunction(recipePlanUrl);
};

const createRecipeQtyIngredients = () => {
  return postAndPostFunction(recipeQtyIngredientsUrl);
};

const postRecipe = options => {
  return postAndPostFunction(recipeUrl, options);
};

//============================= PATCH FUNCTIONS ==============================================

const updateIngredient = ingredient => {
  const options = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" ,
    Authorization: localStorage.getItem("token")},
    body: JSON.stringify({
      ingredient
    })
  };
  return postAndPostFunction(`${ingredientUrl}/${ingredient.id}`, options);
};

//============================= PATCH FUNCTIONS ==============================================

const deletePlan = planId => {
  const options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" ,
    Authorization: localStorage.getItem("token")}
  };
  return postAndPostFunction(`${planUrl}/${planId}`, options);
};


//============================= PRIMARY PATCH AND POST FUNCTION ==============================================

const postAndPostFunction = (url, options) => {
  return fetch(url, options)
  .then(resp => resp.json());
};







export default {
  getProfile,
  getRecipes,
  getIngredients,
  getUsers,
  getPlans,
  getRecipePlans,
  getRecipeQtyIngredients,
  loginPost,
  createIngredients,
  createPlans,
  createUsers,
  createRecipePlans,
  createRecipeQtyIngredients,
  postRecipe,
  updateIngredient,
  deletePlan
};
