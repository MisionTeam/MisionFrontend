import { handleActions } from 'redux-actions';

import * as authActions from 'store/auth/authActions.js';
import * as facebookLoginActions from 'store/facebookLogin/facebookLoginActions.js';
import * as AuthModels from 'store/auth/authModels.js';

export const authReducer = handleActions({

  [authActions.userLogin().type]: (state) => {
    console.log(state);
    return state.merge({
      isLoggedIn: true
    });
  },

  [authActions.userLogout().type]: (state) => {
    return state.merge({
      isLoggedIn: false
    });
  },

  [authActions.userLoginFailed().type]: (state) => {
    console.log(state);
    return state.merge({
      isLoggedIn: false
    });
  },

  [facebookLoginActions.getFacebookLoginStatus().type]: (state, action) => {
    console.log(action);
    return state.mergeDeep({
      facebookLogin: action.payload
    });
  }

}, new AuthModels.InitialState());
