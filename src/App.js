import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';

class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  renderLoader = () => (
    <div className="loader">
      <div className="loader__icon">
        <Loader
          type="Puff"
          color="#00BFFF"
          height="100"
          width="100"
        />
      </div>
    </div>
  );

  render() {
    const { loading: { value } } = store.getState();
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            {value && this.renderLoader()}
            <Routes />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
