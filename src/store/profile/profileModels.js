import Immutable from 'immutable';

const Member = Immutable.Record({
  firstName: null,
  lastName: null
});

const Profile = Immutable.Record({
  member: new Member()
});

export {
  Member,
  Profile as InitialState
};
