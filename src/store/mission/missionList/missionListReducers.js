import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import * as MissionListModels from 'store/mission//missionList/missionListModels.js';
import * as missionListActions from 'store/mission/missionList/missionListActions.js';

export default handleActions({
  [missionListActions.getMissionList().type]: (state, action) => {
    return state.setLoaded().mergeDeep({
      missions: new Immutable.List(
        action.payload.data.missions.map(mission => new MissionListModels.MissionListItem({
          ...mission,
          address: new MissionListModels.Address({
            ...mission.address
          }),
          author: new MissionListModels.Author({
            ...mission.author
          })
        }))
      )
    });
  }

}, new MissionListModels.InitialState());
