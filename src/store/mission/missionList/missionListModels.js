import Immutable from 'immutable';
import ServerRecord from 'store/shared/serverRecord.js';

import { Address, Author } from 'store/mission/missionModels.js';

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
  MissionListItem,
  MissionList as InitialState
};
