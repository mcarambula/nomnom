import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchInput.scss';

class SearchInput extends Component {
	constructor() {
		super();
		this.state = {
			show : false,
			search : '',
			searchBy: 'id'
		}
	}
	handleInputChange( e, option ) {
        e.preventDefault();
        //Setting the value of the respective input
        this.setState({
            [ option ] : e.target.value
        })
    }
	/* Cleaning input and state after closing the search box */
	cleanInput(){
		this.setState({ search: '', show: false });
		this.props.searchRecipe('');
	}
	/* Show the search bar */
	showInput() {
		this.setState({show: true}, () => this.searchInput.focus());
	}
	/* Search recipes after hit enter */
	searchRecipe(e) {
		e.preventDefault();
		this.props.searchRecipe(this.state.search, this.state.searchBy);
	}
	render() {
		const recipes = this.props.recipes || {};
		//Showing the search icon only if there's recipes created.
		const showSearch = (Object.keys(recipes).length !== 0) ? true : false;
		return (
			<div className='search-recipes-input-wrapper'>
				<div className='app-title'>
					List of recipes
					{ showSearch &&
						<div className='show-search' onClick={() => this.showInput()}/>
					}
				</div>
				<form
					className={`input-search-form ${this.state.show ? 'open' : ''}`}
					onSubmit={(e) => this.searchRecipe(e)}>
					<select name='search-by'
						className={`input-search-by ${this.state.show ? 'open' : ''}`}
						value={this.state.searchBy}
						onChange={e => this.handleInputChange(e, 'searchBy')}>
						<option value='id'>ID</option>
						<option value='query'>Regex</option>
					</select>
					<input
						type='text'
						value={this.state.search}
						placeholder='Search recipe'
						onChange={e => this.handleInputChange(e, 'search')}
						className={`input-search ${this.state.show ? 'open' : ''}`}
						ref={input => {
							this.searchInput = input;
						}}
					/>
				</form>
				{ this.state.show && <div className='clean-search' onClick={() => this.cleanInput()} /> }
			</div>
		);
	}
}

SearchInput.propTypes = {
	searchRecipe: PropTypes.func
};

SearchInput.defaultProps = {
	searchRecipe: () => {}
};
export default SearchInput;
