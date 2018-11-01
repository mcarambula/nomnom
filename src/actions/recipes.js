export const GET_RECIPES = 'GET_RECIPES';
export const ADD_RECIPE = 'ADD_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';

export const getRecipes = (recipes) => (
    {
        type: GET_RECIPES,
        recipes
    }
);

export const addRecipe = (recipe) => (
    {
        type: ADD_RECIPE,
        recipe
    }
);

export const deleteRecipe = (recipe) => (
    {
        type: DELETE_RECIPE,
        recipe
    }
);
