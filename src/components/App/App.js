import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../AppRoutes/AppRoutes';
import { connect } from 'react-redux';
import { handleInitialData } from '../../actions/shared';
import './App.scss';

class App extends Component {
    constructor(){
        super();
    }
    componentDidMount(){
        this.props.handleInitialData();
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

const mapDispatchToProps = { handleInitialData };

function mapStateToProps({ recipes }){
    return {
        loading: recipes === null
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
