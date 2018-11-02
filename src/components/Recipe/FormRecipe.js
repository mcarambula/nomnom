import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleRecipe } from '../../actions/shared';
import './AddRecipe.scss';

class FormRecipe extends Component {
    constructor(props) {
        super();
        console.log(props);
        this.state = {
            title: (props.recipe !== null ) ? props.recipe.title : '',
            description: (props.recipe !== null ) ? props.recipe.content : ''
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
        const recipeId = (this.props.recipe !== null) ? this.props.recipe.id : null;
        /* Adding the recipe */
        this.props
            .handleRecipe(title, description, recipeId)
            .then(() => this.props.history.push('/'));
    }
    renderTitle(recipe) {
        return (recipe === null) ? <h3 className='app-title'>Add a new recipe</h3> : null;
    }
    renderButtonText(recipe) {
        return (recipe === null) ? 'Add' : 'Submit';
    }
    goBack(e) {
        e.preventDefault();
        this.props.history.goBack();
    }
    render() {
        const { title, description, submitting } = this.state;
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
                        placeholder='Reciple Title'
                        onChange={(e) => this.handleInput(e, 'title')}
                        />
                    <label>Recipe Description</label>
                    <textarea
                         name='description'
                         type='text'
                         value={description}
                         className='form-input'
                         placeholder='Recipe Description'
                         onChange={(e) => this.handleInput(e, 'description')}
                         />
                     <button
                        className='cancel-button'
                        disabled={submitting} onClick={(e) => this.goBack(e)}>
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

const mapDispatchToProps = { handleRecipe };

function mapStateToProps({ recipes }, { history }){
    const params = (history.location.state !== undefined) ? history.location.state.params : { recipeId: null };
    const { recipeId } = params;
    return {
        recipe: recipes[recipeId] || null
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FormRecipe));
