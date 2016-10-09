import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import locationReducer from 'store/location';
import { authReducer } from 'store/auth/authReducers.js';
import { memberReducer } from 'store/member/memberReducers.js';

export const rootReducer = (asyncReducers) => {
  return combineReducers({
    app: combineReducers({
      member: memberReducer,
      auth: authReducer
    }),
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
