import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchInput.scss';

class SearchInput extends Component {
	constructor() {
		super();
		this.state = {
			show : false,
			search : ''
		}
	}
	handleInputChange(e){
		const search = e.target.value;
		this.setState({ search });
	}
	cleanInput(){
		this.setState({ search: '', show: false });
		this.props.searchRecipe('');
	}
	showInput() {
		this.setState({show: true}, () => this.searchInput.focus());
	}
	searchRecipe(e) {
		e.preventDefault();
		this.props.searchRecipe(this.state.search);
	}
	render() {
		const recipes = this.props.recipes || {};
		//Showing the search icon only if there's recipes created.
		const showSearch = (Object.keys(recipes).length !== 0) ? true : false;
		return (
			<div className='search-books-input-wrapper'>
				<div className='app-title'>
					List of recipes
					{ showSearch &&
						<div className='show-search' onClick={() => this.showInput()}/>
					}
				</div>
				<form
					className={`input-search-form ${this.state.show ? 'open' : ''}`}
					onSubmit={(e) => this.searchRecipe(e)}>
					<input
						type='text'
						value={this.state.search}
						placeholder='Search recipe'
						onChange={e => this.handleInputChange(e)}
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
