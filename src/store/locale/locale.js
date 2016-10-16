import Immutable from 'immutable';
import { createAction, handleActions } from 'redux-actions';
import moment from 'moment';

import { InitialState } from 'store/locale/localeModels.js';
import { getNextLocale, loadLocaleData } from 'utils/intlUtils.js';
import { storageManager, STORAGE_TYPES } from 'utils/storageUtils.js';
import messages from 'messages/index.js';

const localeStorage = storageManager.createOrFetchStorage('locale', STORAGE_TYPES.local);

// The action...
export const localeUpdated = createAction('LOCALE_UPDATED');

/**
* This method returns the promise that is used in the thunk for the `localeUpdated` action. The payload here is then
* final payload that is sent to the reducer.
*/
const loadNextLocaleData = (locale) => {
  return new Promise((resolve) => {
    loadLocaleData(locale)
    .then(() => {
      const payload = { code: locale, messages: messages[locale] };
      resolve(payload);
    });
  });
};

/**
* A thunk for the action... to ensure that we silo any side-effects such as loading another locale's data and setting
* the selected locale in storage.
*/
export const toggleLocale = () =>
  (dispatch) => {
    const nextLocale = getNextLocale(localeStorage.get());
    // Update the locale for moment
    moment.locale(nextLocale);
    loadNextLocaleData(nextLocale).then((res) => {
      dispatch(localeUpdated(res));
    });
  };

/**
* The reducer. Will add the locale and the messages for said local to the state.
*/
export const localeReducer = handleActions({
  [localeUpdated().type]:
    (state, action) =>
      state.mergeDeep({
        messages: Immutable.Map(messages[action.payload.code])
      })
}, new InitialState());
