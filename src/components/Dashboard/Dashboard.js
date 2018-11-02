import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchRecipe } from '../../api/api';
import SearchInput from '../Search/SearchInput';
import Recipe from '../Recipe/Recipe';
import Loader from '../Loader/Loader';
import './Dashboard.scss';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes : props.recipes || {},
            loading : props.loading || false,
            message: ''
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.recipes !== this.props.recipes) {
            this.setState({ recipes: this.props.recipes, loading: false });
        }
    }
    /* Render the recipes in a grid layout */
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
                <div className='centered'>No recipes.</div>
            :
                <div className='grid-recipe'>
                    {this.gridRecipes(recipes)}
                </div>
        )
    }
    /* This functions allows to search the recipes given an id or regex */
    searchRecipes(query) {
        if (query === '') {
			return this.setState({ recipes: this.props.recipes, loading: false });
		}
		this.setState({ loading: true }, () => {
			searchRecipe(query)
				.then(searchedRecipes => {
                    this.setState({ recipes: searchedRecipes, loading: false })
				})
				.catch(e => {
                    this.setState({ recipes: {}, loading: false });
				});
			}
		);
	}
    render() {
        const { loading, recipes } = this.state;
        const { error } = this.props;
        return (
            <Fragment>
                <SearchInput
                    recipes={recipes}
                    searchRecipe={(query) => this.searchRecipes(query)}/>
                <div className='results'>
                    { loading
                        ? <Loader />
                        : this.renderRecipes(recipes, error)
                    }
                </div>
                <div className="add-recipe">
                    <Link to='add' className='add'>Add a recipe</Link>
                </div>
            </Fragment>
        )
    }
}

Dashboard.propTypes = {
	recipes: PropTypes.object,
    error: PropTypes.bool,
}

Dashboard.defaultProps = {
	recipes: {},
    error: false
}

function mapStateToProps({ recipes, error }, props){
    return {
        loading: recipes === null && error === null,
        recipes,
        error
    }
}

export default  withRouter(connect(mapStateToProps)(Dashboard));
