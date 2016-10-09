import Immutable from 'immutable';

const Member = Immutable.Record({
  firstName: 'Kobe',
  lastName: 'Bryant'
});

export {
  Member as InitialState
};
