import React from 'react';
import SearchInput from '../Search/SearchInput';
import './Dashboard.scss';

const Dashboard = () => (
    <div className="app">
		<div className="list-recipes">
			<div className="list-recipes-title">
				<h1>NomNom Recipes App</h1>
			</div>
            <div className="list-recipes-content">
				<SearchInput />
			</div>
		</div>
	</div>
)

export default Dashboard;
