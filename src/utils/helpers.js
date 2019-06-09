/**
 * Get the jwt from localstorage
 * @returns {object | *}
 */
const getTokenFromStorage = () => {
  const token = localStorage.getItem('auth-token');
  if (token) {
    return JSON.parse(token);
  }
  return null;
};

/**
 * Saves the token to localstorage
 * @param {object} authData
 */
const saveTokenToStorage = (authData) => {
  // eslint-disable-next-line
  const { meta, token_data } = authData;
  localStorage.setItem('auth-token', JSON.stringify(token_data.token));
  localStorage.setItem('expiry', JSON.stringify(token_data.expires));
  localStorage.setItem('profile', JSON.stringify(meta));
};

/**
 * Removes token from localstorage
 */
const logoutUser = () => {
  localStorage.removeItem('auth-token');
  localStorage.removeItem('expiry');
  localStorage.removeItem('profile');
};

/**
 * Checks if user is logged in
 * @returns {string}
 */
const isLoggedIn = () => localStorage.getItem('auth-token');


export {
  getTokenFromStorage,
  saveTokenToStorage,
  logoutUser,
  isLoggedIn,
};
