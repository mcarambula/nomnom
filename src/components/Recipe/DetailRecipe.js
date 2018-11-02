import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteRecipe } from '../../actions/shared';
import FormRecipe from './FormRecipe';
import './DetailRecipe.scss';

class DetailRecipe extends Component {
    constructor() {
        super();
        this.state = {
            edit: false
        }
    }
    renderRecipeDetail(recipe, history, deleteRecipe, edit) {
        return (
            <Fragment>
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
                        onClick={ () => this.setState({ edit: true }) }>Edit</button>
                </div>
            </Fragment>
        )
    }
    render() {
        const { recipe, history, deleteRecipe } = this.props;
        const { edit } = this.state;
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
                {
                    edit
                    ?
                        <FormRecipe />
                    :
                        this.renderRecipeDetail(recipe, history, deleteRecipe)
                }
            </div>
        )
    }
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
