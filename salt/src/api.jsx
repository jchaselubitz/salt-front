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
  return loginCall(loginUrl, email, password)
}

const loginCall = (url, email, password) => {
  const options = {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    Accept: 'application/json'
    },
    body: JSON.stringify({
      user: {
        email: email,
        password: password
      }
    })
  }
  return fetch(url, options)
    .then(resp => resp.json())
  
}

const getProfile = () => {
  const options = {
    method: 'GET',
    headers: {
      Authorization: localStorage.getItem("token")
    }
  }
  return fetch(profileUrl, options)
    .then(resp => resp.json())
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



//I THINK this is for the createUser form

// const postUser = () => {
//   return postFunction(userUrl)
// }

// postFunction = (url) => {
//   const options = {
//     method: 'POST', 
//     headers: {
//       'Content-Type': 'application/json',
//     Accept: 'application/json'
//     },
//     body: JSON.stringify({
//       user: {
//         fullname: 'Shane Walsh', 
//         email: "shanewalsh@test.com",
//         password: 123
//       }
//     })
//   }
//   return fetch(url, options)
//     .then(resp => resp.json())
//     .then(resp => console.log(resp))
// }




export default {
  getProfile,
  getRecipes,
  getIngredients,
  getUsers,
  getPlans,
  getRecipePlans,
  getRecipeQtyIngredients,
  loginPost
};