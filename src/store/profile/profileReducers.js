import { handleActions } from 'redux-actions';

import * as ProfileModels from 'store/profile/profileModels.js';

export const profileReducer = handleActions({

}, new ProfileModels.InitialState());
