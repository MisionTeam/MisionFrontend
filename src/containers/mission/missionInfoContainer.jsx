import React from 'react';
import autobind from 'autobind-decorator';

import MissionList from 'components/mission/missionList.jsx';
import MissionDetails from 'components/mission/missionDetails.jsx';

class MissionInfoContainer extends React.Component {
  render() {
    return (
      <div className="mission-info">
        <MissionList />
        <MissionDetails />
      </div>
    );
  }
}

export default MissionInfoContainer;
