import { GET_RECIPES, ADD_RECIPE, DELETE_RECIPE } from '../actions/recipes';

/* Reducer for managing questions part of the state */
export default function recipes (state = null, action) {
    switch(action.type) {
        case GET_RECIPES :
            return {
                ...state,
                ...action.recipes
            };
        case ADD_RECIPE :
            return {
                ...state,
                [action.recipe.id] : {
                    ...action.recipe
                }
            }
        case DELETE_RECIPE :
            const { [action.recipe.id]: value, ...newState } = state;
            return newState;
        default :
            return state;
    }
}
