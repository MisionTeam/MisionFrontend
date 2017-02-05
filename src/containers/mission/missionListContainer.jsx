import React from 'react';
import Paper from 'material-ui/Paper';
import autobind from 'autobind-decorator';

import MissionInfoContainer from 'containers/mission/missionInfoContainer.jsx';
import MissionFilter from 'components/mission/missionFilter.jsx';

const MISSION_LIST = [
  {
    "id":3004,
    "category":"transportation",
    "title":"Get me a dinner!",
    "status":1,
    "price":"20",
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
    "status":2,
    "price":"40",
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
    "status":3,
    "price":"50",
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

const filterMap = {
  ALL: 0,
  A: 1,
  B: 2
};

class MissionListContainer extends React.Component {
  state = {
    selectedIndex: 0,
    selectedMission: {}
  }

  @autobind
  handleFilterChange(filter) {
    this.setState({
      selectedIndex: filterMap[filter]
    });
  }

  @autobind
  selectMission(mission) {
    console.log(mission.id);
    this.setState({
      selectedMission: mission
    });
  }

  render() {
    const { selectedIndex, selectedMission } = this.state;
    return (
      <div className="mission-list-container">
        <div className="mission-list-container__container">
          <Paper zDepth={1}>
            <div className="paper-container">
              <MissionFilter handleFilterChange={this.handleFilterChange} selectedIndex={selectedIndex} />
              <MissionInfoContainer filteredMissionList={MISSION_LIST} selectMission={this.selectMission} selectedMission={selectedMission} />
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

export default MissionListContainer;
