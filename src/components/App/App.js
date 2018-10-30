import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../AppRoutes/AppRoutes';
import './App.scss';

class App extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div className="app">
        		<div className="recipes">
        			<div className="title">
        				<h1>NomNom Recipes App</h1>
        			</div>
                    <div className="content">
                        <BrowserRouter>
                            <AppRoutes />
                        </BrowserRouter>
                    </div>
        		</div>
        	</div>
        );
    }
}

export default App;
