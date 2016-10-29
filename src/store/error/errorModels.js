import Immutable from 'immutable';

const Error = Immutable.Record({
  id: 'systemError.generalErrorPlaceholder.id',
  description: 'systemError.generalErrorPlaceholder.description',
  callback: (dispatch) => {
    window.location.pathname = '/home';
  }
});

export {
  Error as InitialState
};
