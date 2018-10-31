import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRecipes } from '../../api/api';
import SearchInput from '../Search/SearchInput';
import './Dashboard.scss';

class Dashboard extends Component {
    gridRecipes(recipes) {
        return Object.keys(recipes).map(i => {
            const recipe = recipes[i];
            return (
                <div key={recipe.id} className='a-recipe'>
                    <div className='a-recipe-thumbnail'>{recipe.title}</div>
                    <div className='a-recipe-description'>{recipe.content}</div>
                </div>
            )
        })
    }
    renderRecipes(recipes, error) {
        console.log(error);
        if (error) {
            return <div className='centered'>An error has ocurred. Please try later.</div>
        }
        return (
            recipes.length === 0 ?
                <div className='centered'>There's no recipe yet.</div>
            :
                <div className='grid-recipe'>
                    {this.gridRecipes(recipes)}
                </div>
        )
    }
    render() {
        const { loading, recipes, error } = this.props;
        return (
            <Fragment>
                <SearchInput />
                <div className='results'>
                    { loading
                        ? <div>Loading ... </div>
                        : this.renderRecipes(recipes, error)
                    }
                </div>
                <div className="add-recipe">
                    <Link to='add' className='add'>Add a book</Link>
                </div>
            </Fragment>
        )
    }
}


function mapStateToProps({ recipes, error }){
    return {
        loading: recipes === null && error === null,
        recipes,
        error
    }
}

export default connect(mapStateToProps)(Dashboard);
