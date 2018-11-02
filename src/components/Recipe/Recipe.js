import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './Recipe.scss';

const Recipe = ({ recipe, history }) => {
    /* Go to the detail of the recipe */
    const goToDetail = (recipe) => {
        history.push({ pathname: '/detail', state: { recipeId: recipe.id }});
    }
    return (
        <div className='recipe' onClick={() => goToDetail(recipe)}>
            <div className='recipe-thumbnail'>{`${(recipe.title.length > 20 ) ? `${recipe.title.substring(0,20)}...` : recipe.title}`}</div>
        </div>
    )
}

Recipe.propTypes = {
	recipe: PropTypes.object
}

Recipe.defaultProps = {
	recipe: {}
}

export default withRouter(Recipe);
