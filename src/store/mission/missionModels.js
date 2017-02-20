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

const Mission = ServerRecord({
  missionList: undefined,
  selectedMission: undefined
});

// Since we should be using Immutable's `delete` methods on the records in our reducers (instead of creating
// new instances of them), we don't need to export most of these models. `Device`s and `LoyaltyActivation`s will be
// created elsewhere, so export those. DEVICE_TYPES is just an enum.
export {
  Address,
  Author,
  Mission
};
