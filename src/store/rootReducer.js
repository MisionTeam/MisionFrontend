import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import locationReducer from 'store/location';
import { authReducer as auth } from 'store/auth/authReducers.js';
import { memberReducer as member } from 'store/member/memberReducers.js';
import { localeReducer as locale } from 'store/locale/locale.js';

const reducerMap = {
  auth,
  member,
  locale
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
