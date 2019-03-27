import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

/**
 * Get the jwt from localstorage
 * @returns {object | *}
 */
const getTokenFromStorage = () => {
  const token = localStorage.getItem('auth-token');
  if (token) {
    const parsedToken = JSON.parse(token);
    return parsedToken.token;
  }
  return null;
};

/**
 * Saves the token to localstorage
 * @param {object} token
 */
const saveTokenToStorage = (token) => {
  localStorage.setItem('auth-token', JSON.stringify(token));
};

/**
 * Removes token from localstorage
 */
const logoutUser = () => {
  localStorage.removeItem('auth-token');
  history.push('/login');
};

/**
 * Checks if user is logged in
 * @returns {string}
 */
const isLoggedIn = () => localStorage.getItem('auth-token');


export {
  history,
  getTokenFromStorage,
  saveTokenToStorage,
  logoutUser,
  isLoggedIn,
};
