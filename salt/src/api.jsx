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
  const options = {
    method: "GET",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  };
  return fetch(profileUrl, options).then(resp => resp.json());
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
  return fetch(url).then(resp => resp.json());
};

//============================= POST FUNCTIONS ==============================================

const createIngredients = () => {
  return postFunction(ingredientUrl);
};

const createPlans = (planObject) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      calendar: {
        user_id: planObject.id,
        start_date: planObject.start_date,
        end_date: planObject.end_date,
        index_calendars_on_user_id: planObject.recipeIds
      }
    })
  };
  return postFunction(planUrl, options);
};

const createUsers = () => {
  return postFunction(usersUrl);
};

const createRecipePlans = () => {
  return postFunction(recipePlanUrl);
};

const createRecipeQtyIngredients = () => {
  return postFunction(recipeQtyIngredientsUrl);
};

const postRecipe = options => {
  return postFunction(recipeUrl, options);
};

const postFunction = (url, options) => {
  return fetch(url, options).then(resp => resp.json());
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
  postRecipe
};
