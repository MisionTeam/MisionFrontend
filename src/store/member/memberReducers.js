import { handleActions } from 'redux-actions';

import * as MemberModels from 'store/member/memberModels.js';

export const memberReducer = handleActions({

}, new MemberModels.InitialState());
