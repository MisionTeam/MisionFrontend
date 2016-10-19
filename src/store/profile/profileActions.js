import { createAction } from 'redux-actions';

import profileService from 'store/profile/profileService.js';

import { storageManager, STORAGE_TYPES } from 'utils/storageUtils.js';
const authStorage = storageManager.createOrFetchStorage('auth', STORAGE_TYPES.local);

export const getUserProfile = createAction('GET_USER_PROFILE');
export const getUserProfileFailed = createAction('GET_USER_PROFILE_FAILED');

export const processGetUserProfile = (dispatch) => {
  return profileService.getProfile()
    .withPathComponents({ token: authStorage.get() })
    .addCallback(response => dispatch(getUserProfile(response)))
    .withErrorCallback(error => dispatch(getUserProfileFailed(error)))
    .exec();
};
