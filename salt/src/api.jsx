const baseUrl = "http://localhost:3000/api/v001";
const recipeUrl = `${baseUrl}/recipes`;
const ingredientUrl = `${baseUrl}/ingredients`;
const PlanUrl = `${baseUrl}/calendars`;
const userUrl = `${baseUrl}/users`;
const recipePlanUrl = `${baseUrl}/recipe_calendars`;
const recipeQtyIngredientsUrl = `${baseUrl}/recipe_qty_ingredients`;

//============================= GET FUNCTIONS ==============================================

const getRecipes = () => {
  return getFunction(recipeUrl);
};

const getIngredients = () => {
  return getFunction(ingredientUrl);
};

const getUsers = () => {
  return getFunction(userUrl);
};

const getPlans = () => {
  return getFunction(PlanUrl);
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

export default {
  getRecipes,
  getIngredients,
  getUsers,
  getPlans,
  getRecipePlans,
  getRecipeQtyIngredients
};
