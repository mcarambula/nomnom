import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addRecipe } from '../../api/api';
import { handleAddRecipe } from '../../actions/shared';
import './AddRecipe.scss';

class AddRecipe extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: ''
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
        this.props
            .handleAddRecipe(title, description)
            .then(() => this.props.history.push('/'));
    }
    render() {
        const { title, description, submitting } = this.state;
        return (
            <div className='add-content'>
                <h3 className='app-title'>Add a new recipe</h3>
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
                     <button className='cancel-button' disabled={submitting} onClick={() => this.props.history.replace('/')}> Cancel </button>
                     <button className='button' disabled={submitting}>{submitting ? 'Saving...': 'Submit'}</button>
                 </form>
            </div>
        )
    }
}

const mapDispatchToProps = { handleAddRecipe };

export default withRouter(connect(null, mapDispatchToProps)(AddRecipe));
