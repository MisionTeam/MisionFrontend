import Immutable from 'immutable';

import { storageManager, STORAGE_TYPES } from 'utils/storageUtils.js';
const authStorage = storageManager.createOrFetchStorage('auth', STORAGE_TYPES.local);

const Auth = Immutable.Record({
  isLoggedIn: !!authStorage.get(),
  facebookLogin: {
    status: null,
    authResponse: {
      accessToken: null,
      expiresIn: null,
      signedRequest: null,
      userID: null
    }
  }
});

export {
  Auth as InitialState
};
