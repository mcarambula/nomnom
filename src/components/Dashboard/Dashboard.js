import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchRecipe } from '../../api/api';
import SearchInput from '../Search/SearchInput';
import Recipe from '../Recipe/Recipe';
import './Dashboard.scss';

class Dashboard extends Component {
    gridRecipes(recipes) {
        return Object.keys(recipes).map(i => {
            const recipe = recipes[i];
            return (
                <Recipe key={recipe.id} recipe={recipe} />
            )
        })
    }
    renderRecipes(recipes, error) {
        if (error) {
            return <div className='centered error'>An error has ocurred. Please try later.</div>
        }
        return (
            Object.keys(recipes).length === 0 ?
                <div className='centered'>There's no recipe yet.</div>
            :
                <div className='grid-recipe'>
                    {this.gridRecipes(recipes)}
                </div>
        )
    }
    searchRecipes(query) {
        console.log(query);
		if (query === '') {
			this.setState({search: '', recipes: [], loading: false });
			return;
		}
		/* Wait until the state is updating to make the call to the API */
		this.setState({ loading: true, search: query }, () => {
			searchRecipe(query)
				.then(searchedRecipes => {


				})
				.catch(e => {
				});
			}
		);
	}
    render() {
        const { loading, recipes, error } = this.props;
        return (
            <Fragment>
                <SearchInput recipes={recipes} searchRecipe={(query) => this.searchRecipes(query)}/>
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
