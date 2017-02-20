import { handleActions } from 'redux-actions';

import * as MissionModels from 'store/mission/missionModels.js';
import * as SelectedMissionModels from 'store/mission/selectedMission/selectedMissionModels.js';
import * as selectedMissionActions from 'store/mission/selectedMission/selectedMissionActions.js';

export default handleActions({
  [selectedMissionActions.getMissionDetails().type]: (state, action) => {
    const comments = action.payload.data.mission.comments;
    const address = action.payload.data.mission.address;
    const author = action.payload.data.mission.author;
    return state.setLoaded().mergeDeep({
      ...action.payload.data.mission,
      comments: comments && comments.length > 0 ?
                  comments.map(comment => new SelectedMissionModels.Comment({
                    comment: comment.comment,
                    author: new MissionModels.Author({
                      ...comment.user
                    })
                  })) : null,
      address: new MissionModels.Address({
        ...address
      }),
      author: new MissionModels.Author({
        ...author
      })
    });
  }

}, new SelectedMissionModels.InitialState());
