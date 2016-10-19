import { createAction } from 'redux-actions';

// import { storageManager, STORAGE_TYPES } from 'utils/storageUtils.js';
// const authStorage = storageManager.createOrFetchStorage('auth', STORAGE_TYPES.local);

export const facebookLogin = createAction('FACEBOOK_LOGIN');
export const getFacebookLoginStatus = createAction('GET_FACEBOOK_LOGIN_STATUS');

export const processgetFacebookLoginStatus = (dispatch, cb) => {
  window.FB.getLoginStatus((response) => {
    dispatch(getFacebookLoginStatus(response));
    if (cb) {
      cb(response);
    }
  }, (error) => {
    console.log(error);
  });
};
