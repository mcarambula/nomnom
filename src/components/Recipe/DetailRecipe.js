import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AddRecipe from './AddRecipe';
import { deleteRecipe } from '../../actions/shared';
import './DetailRecipe.scss';

const DetailRecipe = ({ recipe, history, deleteRecipe }) => {
    /* If recipe comes null is because the user wants to add a new one */
    if (recipe === null) {
        return <AddRecipe />;
    }
    return (
        <div className='recipe-detail'>
            <div className='recipe-title-container'>
                <h3 className='app-title'>
                    {recipe.title}
                    <img
                        src={require('../../icons/icon-trash.png')}
                        className='trash' alt='Delete Recipe'
                        onClick={() => deleteRecipe(recipe).then(() => history.replace('/')) }
                         />
                </h3>
            </div>
            <div className='recipe-detail-container'>
                <div className='recipe-thumbnail'/>
                <div className='container'>
                    <div>{recipe.content}</div>
                </div>
            </div>
            <div className='recipe-detail-buttons'>
                <button
                    className='cancel-button'
                    onClick={() => history.goBack()}> Cancel </button>
                <button
                    className='button'
                    onClick={ () => history.push('/edit', { params: { recipeId: recipe.id }}) }>Edit</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = { deleteRecipe };

function mapStateToProps({ recipes }, { history }){
    const params = (history.location.state !== undefined) ? history.location.state.params : { recipeId: null };
    const { recipeId } = params;
    return {
        recipe: recipes[recipeId] || null,
        recipeId
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailRecipe));
