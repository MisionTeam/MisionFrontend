import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import locationReducer from 'store/location';

import { authReducer as auth } from 'store/auth/authReducers.js';
import { errorReducer as error } from 'store/error/errorReducers.js';
import { localeReducer as locale } from 'store/locale/locale.js';
import { missionReducer as mission } from 'store/mission/missionReducers.js';
import { profileReducer as profile } from 'store/profile/profileReducers.js';

const reducerMap = {
  auth,
  error,
  locale,
  mission,
  profile
};

export const rootReducer = (asyncReducers) => {
  return combineReducers({
    app: combineReducers(reducerMap),
    routing: routerReducer,
    location: locationReducer,
    form: formReducer,
    ...asyncReducers
  });
};

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(rootReducer(store.asyncReducers));
};

export default rootReducer;
