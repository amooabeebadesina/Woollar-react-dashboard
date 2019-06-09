import React, { Component } from 'react';
import './App.scss';
import {
  Redirect, Route, Switch, BrowserRouter,
} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import { store, history } from './store';
import Login from './components/pages/login';
import Dashboard from './components/pages/dashboard';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ConnectedRouter history={history}>
            <Switch>
              <Route path="/" exact>
                <Redirect to="/dashboard" />
              </Route>
              <Route exact path="/login" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </ConnectedRouter>
        </BrowserRouter>
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="top-left"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar={false}
          closeOnToastrClick
        />
      </Provider>
    );
  }
}

export default App;
