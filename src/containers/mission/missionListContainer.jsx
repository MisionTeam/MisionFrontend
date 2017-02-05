import React from 'react';
import Paper from 'material-ui/Paper';
import autobind from 'autobind-decorator';

import MissionInfoContainer from 'containers/mission/missionInfoContainer.jsx';
import MissionFilter from 'components/mission/missionFilter.jsx';

const filterMap = {
  ALL: 0,
  A: 1,
  B: 2
};

class MissionListContainer extends React.Component {
  state = {
    selectedIndex: 0
  }

  @autobind
  handleFilterChange(filter) {
    this.setState({
      selectedIndex: filterMap[filter]
    });
  }

  render() {
    const { selectedIndex } = this.state;
    return (
      <div className="mission-list-container">
        <div className="mission-list-container__container">
          <Paper zDepth={1}>
            <div className="paper-container">
              <MissionFilter handleFilterChange={this.handleFilterChange} selectedIndex={selectedIndex} />
              <MissionInfoContainer />
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

export default MissionListContainer;
