import { createAction } from 'redux-actions';

import authService from 'store/auth/authService.js';

import { storageManager, STORAGE_TYPES } from 'utils/storageUtils.js';
const authStorage = storageManager.createOrFetchStorage('auth', STORAGE_TYPES.local);

export const userLogin = createAction('USER_LOGIN');
export const userLogout = createAction('USER_LOGOUT');

export const processUserLogin = (dispatch, data, cb) => {
  console.log('hello');
  authStorage.set(true);
  const formData = new FormData();
  formData.append('fb_token', '1');
  return authService.login()
    .withData(formData)
    .addCallback(response => dispatch(userLogin(response)))
    .exec();
};

export const processUserLogout = (dispatch) => {
  console.log('hello');
  authStorage.set(false);
  dispatch(userLogout());
};
