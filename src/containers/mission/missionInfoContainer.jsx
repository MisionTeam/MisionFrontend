import React from 'react';
import autobind from 'autobind-decorator';

import MissionList from 'components/mission/missionList.jsx';
import MissionDetails from 'components/mission/missionDetails.jsx';

class MissionInfoContainer extends React.Component {
  static propTypes = {
    filteredMissionList: React.PropTypes.array.isRequired
  }

  render() {
    const { filteredMissionList } = this.props;
    return (
      <div className="mission-info">
        <MissionList filteredMissionList={filteredMissionList} />
        <MissionDetails />
      </div>
    );
  }
}

export default MissionInfoContainer;
