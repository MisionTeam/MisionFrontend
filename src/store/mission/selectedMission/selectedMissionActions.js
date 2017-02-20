import { createAction } from 'redux-actions';

import missionService from 'store/mission/missionService.js';

import { storageManager, STORAGE_TYPES } from 'utils/storageUtils.js';
const authStorage = storageManager.createOrFetchStorage('auth', STORAGE_TYPES.local);

export const getMissionDetails = createAction('GET_MISSION_DETAILS');
export const getMissionDetailsFailed = createAction('GET_MISSION_DETAILS_FAILED');

export const processGetMissionDetails = (dispatch, data) => {
  return missionService.getMissionDetails()
    .withPathComponents({ token: authStorage.get(), missionId: data.missionId })
    .addCallback(response => dispatch(getMissionDetails(response)))
    .withErrorCallback(error => dispatch(getMissionDetailsFailed(error)))
    .exec();
};
