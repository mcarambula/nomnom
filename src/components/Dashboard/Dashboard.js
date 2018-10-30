import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRecipes } from '../../api/api';
import SearchInput from '../Search/SearchInput';
import './Dashboard.scss';

class Dashboard extends Component {
    renderRecipes(recipes) {
        return Object.keys(recipes).map(i => {
            const recipe = recipes[i];
            return (
                <div key={recipe.id} className='a-recipe'>
                    <div className='a-recipe-title'>{recipe.title}</div>
                    <div className='a-recipe-description'>{recipe.content}</div>
                </div>
            )
        })
    }
    render() {
        const { loading, recipes } = this.props;
        return (
            <Fragment>
                <SearchInput />
                <div className='results'>
                    { loading
                        ? <div>Loading ... </div>
                        :
                            (
                                recipes.length === 0 ?
                                    <div>There's no recipe yet.</div>
                                :
                                    <div className='grid-recipe'>
                                        {this.renderRecipes(recipes)}
                                    </div>
                            )


                    }
                </div>
                <div className="add-recipe">
                    <Link to='add' className='add'>Add a book</Link>
                </div>
            </Fragment>
        )
    }
}


function mapStateToProps({ recipes }){
    return {
        loading: recipes === null,
        recipes
    }
}

export default connect(mapStateToProps)(Dashboard);
