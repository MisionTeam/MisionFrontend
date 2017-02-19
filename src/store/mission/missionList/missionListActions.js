import { createAction } from 'redux-actions';

import missionService from 'store/mission/missionService.js';

import { storageManager, STORAGE_TYPES } from 'utils/storageUtils.js';
const authStorage = storageManager.createOrFetchStorage('auth', STORAGE_TYPES.local);

export const getMissionList = createAction('GET_MISSION_LIST');
export const getMissionListFailed = createAction('GET_MISSION_LIST_FAILED');

export const processGetMissionList = (dispatch) => {
  return missionService.getMissionList()
    .withPathComponents({ token: authStorage.get() })
    .addCallback(response => dispatch(getMissionList(response)))
    .withErrorCallback(error => dispatch(getMissionListFailed(error)))
    .exec();
};
