import React from 'react';
import { withRouter } from 'react-router-dom';
import './Recipe.scss';

const Recipe = ({recipe, history}) => {
    const seeDetail = (recipe) => {
        history.push('/detail', { params: { recipeId: recipe.id }});
    }
    return (
        <div className='a-recipe' onClick={() => seeDetail(recipe)}>
            <div className='a-recipe-thumbnail'>{recipe.title}</div>
        </div>
    )
}

export default withRouter(Recipe);
