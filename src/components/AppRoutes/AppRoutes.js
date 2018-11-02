import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import FormRecipe from '../Recipe/FormRecipe';
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
                    render={() => <FormRecipe />}
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
