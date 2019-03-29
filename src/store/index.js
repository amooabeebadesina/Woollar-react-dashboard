import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const env = process.env.NODE_ENV;

// eslint-disable-next-line
const composeEnhancers = (env === 'development') ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
