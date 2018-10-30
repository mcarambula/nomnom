import React from 'react';
import SearchInput from '../Search/SearchInput';
import './Dashboard.scss';

const Dashboard = () => (
    <div className="app">
		<div className="recipes">
			<div className="title">
				<h1>NomNom Recipes App</h1>
			</div>
            <div className="content">
				<SearchInput />
                <div className="add-recipe">
					<div className='add'>Add a book</div>
				</div>
			</div>
		</div>
	</div>
)

export default Dashboard;
