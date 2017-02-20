import Immutable from 'immutable';
import ServerRecord from 'store/shared/serverRecord.js';

import { Address, Author } from 'store/mission/missionModels.js';

const Comment = Immutable.Record({
  comment: null,
  author: new Author()
});

const MissionDetails = ServerRecord({
  id: null,
  comments: Immutable.List(),
  author: new Author(),
  address: new Address(),
  deadline: null,
  attachment: null,
  description: null,
  status: null,
  price: null,
  title: null,
  category: null,
  postDate: null
});

export {
  Comment,
  MissionDetails as InitialState
};
