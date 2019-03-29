import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const env = process.env.NODE_ENV;
const loggerMiddleware = createLogger({
  predicate: () => env === 'development',
});

// eslint-disable-next-line
const composeEnhancers = (env === 'development') ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk, loggerMiddleware)));

export default store;
