import * as API from '../api/api';
import * as RECIPES_ACTIONS from '../actions/recipes';
import * as ERROR_ACTIONS from '../actions/errors';

import { showLoading, hideLoading } from 'react-redux-loading';

/* Thunk to retrieve the initial data of the application */
export const handleInitialData = () => (dispatch) => {
    dispatch(showLoading());
    return API.getInitialData()
            .then(({ recipes }) => {
                dispatch(RECIPES_ACTIONS.getRecipes(recipes));
                dispatch(hideLoading());
            }).catch((err) => {
                dispatch(ERROR_ACTIONS.setError(err));
                dispatch(hideLoading());
            })
}
/* Thunk that will be triggered when the user adds a new recipe */
export const handleAddRecipe = (title, content) => ( dispatch ) => {
    dispatch(showLoading());
    return API.addRecipe({title, content})
            .then((recipe) => {
                dispatch(RECIPES_ACTIONS.addRecipe(recipe));
            })
            .then(() => dispatch(hideLoading()));
}

export const deleteRecipe = (recipe) => (dispatch) => {
    dispatch(showLoading());
    return API.deleteRecipe(recipe)
            .then((recipe) => {
                dispatch(RECIPES_ACTIONS.deleteRecipe(recipe));
            })
            .then(() => dispatch(hideLoading()));

}
