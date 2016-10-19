import { handleActions } from 'redux-actions';

import * as ProfileModels from 'store/member/profileModels.js';

export const profileReducer = handleActions({

}, new ProfileModels.InitialState());
