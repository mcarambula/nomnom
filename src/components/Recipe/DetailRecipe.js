import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteRecipe } from '../../actions/shared';
import FormRecipe from './FormRecipe';
import './DetailRecipe.scss';

class DetailRecipe extends Component {
    constructor() {
        super();
        this.state = {
            showEdit: false
        }
    }
    renderRecipeDetail(recipe, history, deleteRecipe, edit) {
        return (
            <div className='recipe-detail-container'>
                <div className='recipe-detail-content'>
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
                        onClick={ () => this.setState({ showEdit: true }) }>Edit</button>
                </div>
            </div>
        )
    }
    delete(recipe, history) {
        if (window.confirm('Are you sure you want to delete the recipe?')) {
            //Delete recipe and back to the home.
            this.props.deleteRecipe(recipe).then(() => history.replace('/'));
        }
    }
    render() {
        const { recipe, history } = this.props;
        const { showEdit } = this.state;
        return (
            <div className='recipe-detail'>
                { recipe !== null && (
                    <Fragment>
                        <div className='recipe-title-container'>
                            <h3 className='app-title'>
                                {recipe.title}
                                <img
                                    src={require('../../icons/icon-trash.png')}
                                    className='trash' alt='Delete Recipe'
                                    onClick={() => this.delete(recipe, history)}
                                     />
                            </h3>
                        </div>
                            {
                                showEdit
                                ?
                                    <FormRecipe goBack={() => this.setState({ showEdit: false })}/>
                                :
                                    this.renderRecipeDetail(recipe, history, deleteRecipe)
                            }
                    </Fragment>
                    )
                }
            </div>
        )
    }
}

DetailRecipe.propTypes = {
	recipe: PropTypes.object,
    history: PropTypes.object
}

DetailRecipe.defaultProps = {
	recipe: {},
    history: {}
}

const mapDispatchToProps = { deleteRecipe };

function mapStateToProps({ recipes }, { history }){
    /* Getting info about the recipe to be shown*/
    const params = (history.location.state !== undefined) ? history.location.state : { recipeId: null };
    const { recipeId } = params;
    return {
        recipe: recipes[recipeId] || null,
        recipeId
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailRecipe));
