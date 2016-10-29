import { createAction } from 'redux-actions';

export const pushSystemError = createAction('PUSH_SYSTEM_ERROR');

export const processPushSystemError = (dispatch, data, cb) => {
  dispatch(pushSystemError(data));
  cb();
};
