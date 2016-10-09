import { createAction } from 'redux-actions';

import { storageManager, STORAGE_TYPES } from 'utils/storageUtils.js';
const authStorage = storageManager.createOrFetchStorage('auth', STORAGE_TYPES.local);

export const userLogin = createAction('USER_LOGIN');
export const userLogout = createAction('USER_LOGIN');

export const processUserLogin = (dispatch, data) => {
  console.log('hello');
  authStorage.set(true);
  dispatch(userLogin(data));
};

export const processUserLogout = (dispatch) => {
  console.log('hello');
  authStorage.set(false);
  dispatch(userLogout());
};
