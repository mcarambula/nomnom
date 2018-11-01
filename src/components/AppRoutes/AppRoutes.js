import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import AddRecipe from '../Recipe/AddRecipe';
import DetailRecipe from '../Recipe/DetailRecipe';

class AppRoutes extends Component {
    render() {
        return (
            <Switch >
                <Route
                    exact
                    path='/'
                    render={() => <Dashboard />}
                />
                <Route
                    path='/add'
                    render={() => <AddRecipe />}
                />
                <Route
                    path='/edit'
                    render={() => <AddRecipe />}
                />
                <Route
                    path='/detail'
                    render={() => <DetailRecipe />}
                />
            </Switch>
        );
    }
}

export default AppRoutes;
