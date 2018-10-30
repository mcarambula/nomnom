import { GET_RECIPES, ADD_RECIPE } from '../actions/recipes';

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
        default :
            return state;
    }
}
