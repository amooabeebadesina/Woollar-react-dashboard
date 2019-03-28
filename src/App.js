import React, { Component } from 'react';
import './App.scss';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Routes />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
