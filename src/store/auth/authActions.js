import { createAction } from 'redux-actions';

import authService from 'store/auth/authService.js';
import * as payloaders from 'store/auth/authPayloaders.js';

import { storageManager, STORAGE_TYPES } from 'utils/storageUtils.js';
const authStorage = storageManager.createOrFetchStorage('auth', STORAGE_TYPES.local);

export const userLogin = createAction('USER_LOGIN');
export const userLogout = createAction('USER_LOGOUT');
export const userLoginFailed = createAction('USER_LOGIN_FAILED');

export const processUserLogin = (dispatch, data, cb) => {
  const cacheAuth = (response) => {
    authStorage.set(response.data.token);
    return response;
  };
  const formData = new FormData();
  formData.append('fb_token', '1');
  return authService.login()
    .withData(formData)
    .addCallback(cacheAuth)
    .addCallback(response => dispatch(userLogin(response)))
    .withErrorCallback(error => dispatch(userLoginFailed(error)))
    .exec();
};

export const processUserLogout = (dispatch) => {
  console.log('hello');
  authStorage.set(false);
  dispatch(userLogout());
};
