import React, { Component } from 'react';
import './App.scss';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';
import { history } from './utils/helpers';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="App">
            <Routes />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
