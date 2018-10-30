import * as API from '../api/api';
import * as RECIPES_ACTIONS from '../actions/recipes';
import { showLoading, hideLoading } from 'react-redux-loading';

/* Thunk to retrieve the initial data of the application */
export const handleInitialData = () => (dispatch) => {
    dispatch(showLoading());
    return API.getInitialData()
            .then(({ recipes }) => {
                dispatch(RECIPES_ACTIONS.getRecipes(recipes));
                dispatch(hideLoading());
            })
}
/* Thunk that will be triggered when the user adds a new recipe
export const handleAddRecipe = (title, content) => ( dispatch, getState ) => {
    dispatch(showLoading());
    return API.addRecipe({title, content})
            .then((recipe) => {
                dispatch(RECIPES_ACTIONS.addRecipe(recipe));
            })
            .then(() => dispatch(hideLoading()));
}
*/
