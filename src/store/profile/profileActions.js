import { createAction } from 'redux-actions';

import profileService from 'store/profile/profileService.js';

import { storageManager, STORAGE_TYPES } from 'utils/storageUtils.js';
const authStorage = storageManager.createOrFetchStorage('auth', STORAGE_TYPES.local);

export const getUserProfile = createAction('GET_USER_PROFILE');
export const getUserProfileFailed = createAction('GET_USER_PROFILE_FAILED');
export const patchUserProfile = createAction('PATCH_USER_PROFILE');
export const patchUserProfileFailed = createAction('PATCH_USER_PROFILE_FAILED');

export const processGetUserFullProfile = (dispatch) => {
  return profileService.getFullProfile()
    .withPathComponents({ token: authStorage.get() })
    .addCallback(response => dispatch(getUserProfile(response)))
    .withErrorCallback(error => dispatch(getUserProfileFailed(error)))
    .exec();
};

export const processPatchUserProfile = (dispatch, data) => {
  return profileService.patchProfile()
    .withData(data)
    .withPathComponents({ token: authStorage.get() })
    .addCallback(response => dispatch(patchUserProfile(response)))
    .withErrorCallback(error => dispatch(patchUserProfileFailed(error)))
    .exec();
};
