import { handleActions } from 'redux-actions';

import * as ProfileModels from 'store/profile/profileModels.js';
import * as profileActions from 'store/profile/profileActions.js';
import * as authActions from 'store/auth/authActions.js';

export const profileReducer = handleActions({
  [profileActions.getUserProfile().type]: (state, action) => {
    return state.mergeDeep(action.payload.data);
  },

  [authActions.userLogout().type]: (state) => new ProfileModels.InitialState()
}, new ProfileModels.InitialState());
