import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from '../reducers';

const env = process.env.NODE_ENV;

export const history = createBrowserHistory();

const loggerMiddleware = createLogger({
  predicate: () => env === 'development',
});

// eslint-disable-next-line
const composeEnhancers = (env === 'development') ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

export const store = createStore(
  createRootReducer(history),
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
      loggerMiddleware,
    ),
  ),
);
