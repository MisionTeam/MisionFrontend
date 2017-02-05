import React from 'react';
import { FormattedMessage } from 'react-intl';
import autobind from 'autobind-decorator';

class MissionDetails extends React.Component {
  static propTypes = {
    selectedMission: React.PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="mission-details">
        {this.props.selectedMission.title}
      </div>
    );
  }
}

export default MissionDetails;
