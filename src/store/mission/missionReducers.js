import { handleActions } from 'redux-actions';

import { mergeSubReducers } from 'utils/immutableReducerUtils.js';
import { Mission as InitialState } from 'store/mission/missionModels.js';

// Sub reducers and actions
import missionList from 'store/mission/missionList/missionListReducers.js';
import selectedMission from 'store/mission/selectedMission/selectedMissionReducers.js';

const mission = handleActions({

}, new InitialState());

// Mission Reducer
export const missionReducer = mergeSubReducers(
  mission, {
    missionList,
    selectedMission
  }
);
