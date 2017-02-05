import React from 'react';
import autobind from 'autobind-decorator';

import MissionList from 'components/mission/missionList.jsx';
import MissionDetails from 'components/mission/missionDetails.jsx';

class MissionInfoContainer extends React.Component {
  static propTypes = {
    filteredMissionList: React.PropTypes.array.isRequired,
    selectMission: React.PropTypes.func.isRequired,
    selectedMission: React.PropTypes.object.isRequired
  }

  render() {
    const { filteredMissionList, selectMission, selectedMission } = this.props;
    return (
      <div className="mission-info">
        <MissionList filteredMissionList={filteredMissionList} selectMission={selectMission} />
        <MissionDetails selectedMission={selectedMission} />
      </div>
    );
  }
}

export default MissionInfoContainer;
