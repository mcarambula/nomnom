import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import AddRecipe from '../Recipe/AddRecipe';

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
            </Switch>
        );
    }
}

export default AppRoutes;
