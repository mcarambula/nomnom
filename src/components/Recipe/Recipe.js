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
        <div className='a-recipe' onClick={() => goToDetail(recipe)}>
            <div className='a-recipe-thumbnail'>{recipe.title}</div>
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
