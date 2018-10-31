import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';
import recipes from './recipes';
import error from './errors';


export default combineReducers({
    recipes,
    error,
    loadingBar: loadingBarReducer
})
