import { createAction } from 'redux-actions';

import profileService from 'store/profile/profileService.js';

import { storageManager, STORAGE_TYPES } from 'utils/storageUtils.js';
const authStorage = storageManager.createOrFetchStorage('auth', STORAGE_TYPES.local);

export const getUserProfile = createAction('GET_USER_PROFILE');
export const getUserProfileFailed = createAction('GET_USER_PROFILE_FAILED');
export const postUserProfile = createAction('POST_USER_PROFILE');
export const postUserProfileFailed = createAction('POST_USER_PROFILE_FAILED');

export const processGetUserFullProfile = (dispatch) => {
  return profileService.getFullProfile()
    .withPathComponents({ token: authStorage.get() })
    .addCallback(response => dispatch(getUserProfile(response)))
    .withErrorCallback(error => dispatch(getUserProfileFailed(error)))
    .exec();
};

export const processPostUserProfile = (dispatch, data) => {
  return profileService.postProfile()
    .withData(data)
    .withPathComponents({ token: authStorage.get() })
    .addCallback(response => dispatch(postUserProfile(response)))
    .withErrorCallback(error => dispatch(postUserProfileFailed(error)))
    .exec();
};
