// @flow

/**
 * Checks if request is successful
 * @param {object} res from axios
 * @returns {boolean}
 */
const isSuccess = (res: any) => res.data && res.data.data;

/**
 * Checks if the server returns a success status
 * @param {object} res from axios
 * @returns {boolean}
 */
const statusSuccess = (res: any) => res.data && res.data.data && res.data.data.status === 'success';

const getResponseData = (res: any) => res.data.data;

export {
  isSuccess,
  statusSuccess,
  getResponseData,
};
