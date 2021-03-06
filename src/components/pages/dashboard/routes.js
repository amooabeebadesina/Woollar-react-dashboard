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

const Routes = (props: any) => (
  <Switch>
    <Route path={props.match.path} exact>
      <Redirect to={`${props.match.path}/home`} />
    </Route>
    <Route exact path={`${props.match.path}/home`} component={Home} />
    <Route exact path={`${props.match.path}/categories`} component={Categories} />
    <Route exact path={`${props.match.path}/products`} component={Products} />
    <Route exact path={`${props.match.path}/transactions`} component={Transactions} />
    <Route exact path={`${props.match.path}/shoppers`} component={Shoppers} />
    <Route exact path={`${props.match.path}/firebase-tokens`} component={Firebase} />
    <Route exact path={`${props.match.path}/locations`} component={Locations} />
    <Route exact path={`${props.match.path}/orders`} component={Orders} />
    <Route exact path={`${props.match.path}/users`} component={Users} />
    <Route exact path={`${props.match.path}/shops`} component={Shops} />
  </Switch>
);

export default Routes;
