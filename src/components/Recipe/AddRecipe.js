import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        console.log(title, description);
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
                     <Link to='/' className='cancel-button'> Cancel </Link>
                     <button className='button' disabled={title === '' || description === '' || submitting }>Submit</button>
                 </form>
            </div>
        )
    }
}

export default AddRecipe;
