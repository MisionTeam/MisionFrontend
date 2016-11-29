import Immutable from 'immutable';

const Address = Immutable.Record({
  lat: null,
  lng: null,
  country: null,
  state: null,
  city: null,
  street: null,
  postcode: null
});

const Profile = Immutable.Record({
  id: null,
  firstName: null,
  lastName: null,
  gender: null,
  age: null,
  email: null,
  phone: null,
  avatar: null,
  job: null,
  hasCar: null,
  address: new Address(),
  labels: []
});

export {
  Address,
  Profile as InitialState
};
