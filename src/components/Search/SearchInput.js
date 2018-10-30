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
		const cleaned = search.trim();
		this.setState({ search });
	}
	cleanInput(){
		this.setState({ search: '', show: false });
	}
	showInput() {
		this.setState({show: true}, () => this.searchInput.focus());
	}
	render() {
		return (
			<div className="search-books-input-wrapper">
				<div className='title'>
					List of recipes
					<div className='show-search' onClick={() => this.showInput()}/>
				</div>
				<input
						type="text"
						value={this.state.search}
						placeholder="Search recipe"
						onChange={e => this.handleInputChange(e)}
						className={`input-search ${this.state.show ? 'open' : ''}`}
						ref={input => {
							this.searchInput = input;
						}}
					/>
				{ this.state.show && <div className="clean-search" onClick={() => this.cleanInput()} /> }
			</div>
		);
	}
}

export default SearchInput;
