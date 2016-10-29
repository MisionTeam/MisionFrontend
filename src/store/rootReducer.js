import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import locationReducer from 'store/location';
import { authReducer as auth } from 'store/auth/authReducers.js';
import { profileReducer as profile } from 'store/profile/profileReducers.js';
import { localeReducer as locale } from 'store/locale/locale.js';
import { errorReducer as error } from 'store/error/errorReducers.js';

const reducerMap = {
  auth,
  profile,
  locale,
  error
};

export const rootReducer = (asyncReducers) => {
  return combineReducers({
    app: combineReducers(reducerMap),
    routing: routerReducer,
    location: locationReducer,
    ...asyncReducers
  });
};

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(rootReducer(store.asyncReducers));
};

export default rootReducer;
