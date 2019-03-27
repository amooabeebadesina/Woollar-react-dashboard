// @flow
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from './home';
import Categories from './categories';
import Products from './products';
import Transactions from './transactions';
import Shoppers from './shoppers';
import Firebase from './firebase';
import Locations from './locations';
import Orders from './orders';
import Users from './users';
import Shops from './shops';
import { isLoggedIn } from '../../../utils/helpers';

const DashboardRoute = (props: any) => {
  if (isLoggedIn()) {
    return (<Route {...props} />);
  }
  return (
    <Redirect to="/login" />
  );
};

const Routes = (props: any) => (
  <Switch>
    <DashboardRoute path={props.match.path} exact>
      <Redirect to={`${props.match.path}/home`} />
    </DashboardRoute>
    <DashboardRoute path={`${props.match.path}/home`} component={Home} />
    <DashboardRoute path={`${props.match.path}/categories`} component={Categories} />
    <DashboardRoute path={`${props.match.path}/products`} component={Products} />
    <DashboardRoute path={`${props.match.path}/transactions`} component={Transactions} />
    <DashboardRoute path={`${props.match.path}/shoppers`} component={Shoppers} />
    <DashboardRoute path={`${props.match.path}/firebase-tokens`} component={Firebase} />
    <DashboardRoute path={`${props.match.path}/locations`} component={Locations} />
    <DashboardRoute path={`${props.match.path}/orders`} component={Orders} />
    <DashboardRoute path={`${props.match.path}/users`} component={Users} />
    <DashboardRoute path={`${props.match.path}/shops`} component={Shops} />
  </Switch>
);

export default Routes;
