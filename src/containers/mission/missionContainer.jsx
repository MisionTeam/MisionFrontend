import React from 'react';

import MissionNavBar from 'containers/mission/missionNavBar.jsx';

const MISSION_LIST = [
  {
    "id":3004,
    "category":"transportation",
    "title":"Get me a dinner!",
    "status":1,
    "price":"$20",
    "author":{
       "id":1053,
       "firstName":"Tom",
       "lastName":"Hardy",
       "avatar":null
    },
    "address":{
       "lat":79.123455,
       "lng":120.7473743,
       "country":"Canada",
       "state":"ON",
       "city":"Toronto",
       "street":"1 Yonge St",
       "postalCode":"L3C 0B3"
    }
  },
  {
    "id":3509,
    "category":"housekeeping",
    "title":"Window cleaning",
    "status":1,
    "price":"$40",
    "author":{
       "id":1092,
       "firstName":"James",
       "lastName":"Mason",
       "avatar":null
    },
    "address":{
       "lat":79.123455,
       "lng":120.7473743,
       "country":"Canada",
       "state":"ON",
       "city":"Toronto",
       "street":"1 Yonge St",
       "postalCode":"L3C 0B3"
    }
  },
  {
    "id":2104,
    "category":"transportation",
    "title":"Send follower!",
    "status":1,
    "price":"$50",
    "author":{
       "id":1153,
       "firstName":"Mary",
       "lastName":"Mann",
       "avatar":null
    },
    "address":{
       "lat":79.123455,
       "lng":120.7473743,
       "country":"Canada",
       "state":"ON",
       "city":"Toronto",
       "street":"1 Yonge St",
       "postalCode":"L3C 0B3"
    }
  }
];

class MissionContainer extends React.Component {
  static propTypes = {
    children: React.PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="mission">
        <div className="container">
          <MissionNavBar />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default MissionContainer;
