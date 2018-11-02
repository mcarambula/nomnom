import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleRecipe } from '../../actions/shared';
import './FormRecipe.scss';

class FormRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: (props.recipe !== null ) ? props.recipe.title : '',
            description: (props.recipe !== null ) ? props.recipe.content : '',
            formError: {
                title: false,
                description: false
            }
        }
    }
    handleInput( e, option ) {
        e.preventDefault();
        //Setting the value of the respective input
        this.setState({
            [ option ] : e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitting: true });
        const { title, description } = this.state;
        /* If recipeId has a value is become the user is coming to edit a recipe */
        const recipeId = (this.props.recipe !== null) ? this.props.recipe.id : null;
        /* Checking submission errors */
        let formError = {title: false, description: false};
        if (title === '' || description === '') {
            if (title === '') {
                formError.title = true;
            }
            if (description === '') {
                formError.description = true;
            }
            return this.setState({formError, submitting: false});
        }

        /* Managing the add or edit recipe submission and getting back to home */
        this.props
            .handleRecipe(title, description, recipeId)
            .then(() => this.props.history.replace({pathname: '/', state: { form: true, recipeId }}));
    }
    /* This function checks if the users is adding
        or editting a recipe to show the appropriate title */
    renderTitle(recipe) {
        return (recipe === null) ? <h3 className='app-title'>Add a new recipe</h3> : null;
    }
    /* This function checks if the users is adding
        or editting a recipe to show the appropriate text  button */
    renderButtonText(recipe) {
        return (recipe === null) ? 'Add' : 'Submit';
    }
    /* This function checks if the users is adding
        or editting a recipe to call the appropiate back function */
    goBack(e, recipe) {
        e.preventDefault();
        return (recipe === null) ? this.props.history.goBack() : this.props.goBack();
    }
    render() {
        const { title, description, submitting, formError } = this.state;
        const { recipe } = this.props;
        return (
            <div className='add-content'>
                {this.renderTitle(recipe)}
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label>Recipe Title</label>
                    <input
                        name='title'
                        type='text'
                        value={title}
                        className='form-input'
                        placeholder='Eg: 3 Ingredient Nutella Brownies'
                        onChange={(e) => this.handleInput(e, 'title')}
                        />
                    { formError.title
                        && <div className='error'>Please fill the recipe title.</div> }
                    <label>Recipe Description</label>
                    <textarea
                         name='description'
                         type='text'
                         value={description}
                         className='form-input'
                         placeholder='E.g: 1 cup (8oz/240g), Nutella 2 eggs (or egg substitutes for brownies), 10 tablespoons all purpose flour'
                         onChange={(e) => this.handleInput(e, 'description')}
                         />
                    { formError.description
                        && <div className='error'>Please fill the content of the recipe.</div> }
                     <button
                        className='cancel-button'
                        disabled={submitting} onClick={(e) => this.goBack(e, recipe)}>
                            Cancel
                    </button>
                     <button
                        className='button'
                        disabled={submitting}>
                        {submitting ? 'Saving...': this.renderButtonText(recipe)}
                    </button>
                 </form>
            </div>
        )
    }
}

FormRecipe.propTypes = {
	recipe: PropTypes.object
}

FormRecipe.defaultProps = {
	recipe: {}
}

const mapDispatchToProps = { handleRecipe };

function mapStateToProps({ recipes }, { history }){
    const params = (history.location.state !== undefined) ? history.location.state : { recipeId: null };
    const { recipeId } = params;
    return {
        recipe: recipes[recipeId] || null
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FormRecipe));
