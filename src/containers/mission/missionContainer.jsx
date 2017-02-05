import React from 'react';

import MissionNavBar from 'containers/mission/missionNavBar.jsx';

class MissionContainer extends React.Component {
  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.element
    ])
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
