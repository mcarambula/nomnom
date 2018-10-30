import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';
import recipes from './recipes';

export default combineReducers({
    recipes,
    loadingBar: loadingBarReducer
})
