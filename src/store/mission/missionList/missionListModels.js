import Immutable from 'immutable';
import ServerRecord from 'store/shared/serverRecord.js';

const Address = Immutable.Record({
  lat: null,
  lng: null,
  country: null,
  state: null,
  city: null,
  street: null,
  postalCode: null
});

const Author = Immutable.Record({
  id: null,
  firstName: null,
  lastName: null,
  avatar: null
});

const MissionListItem = Immutable.Record({
  author: new Author(),
  id: null,
  status: null,
  price: null,
  title: null,
  category: null,
  address: new Address()
});

const MissionList = ServerRecord({
  missions: Immutable.List()
});

export {
  Address,
  Author,
  MissionListItem,
  MissionList as InitialState
};
