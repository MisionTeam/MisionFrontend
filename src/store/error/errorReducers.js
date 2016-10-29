import { handleActions } from 'redux-actions';

import * as errorActions from 'store/error/errorActions.js';
import * as ErrorModels from 'store/error/errorModels.js';

export const errorReducer = handleActions({

  [errorActions.pushSystemError().type]: (state, action) => {
    return state.merge({
      id: action.payload.id,
      description: action.payload.description,
      callback: action.payload.callback
    });
  }

}, new ErrorModels.InitialState());
