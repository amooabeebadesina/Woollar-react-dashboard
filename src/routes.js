import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/pages/login';
import Dashboard from './components/pages/dashboard';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route exact path="/login" component={Login} />
    <Route path="/dashboard" component={Dashboard} />
    <Redirect to="/login" />
  </Switch>
);

export default Routes;
