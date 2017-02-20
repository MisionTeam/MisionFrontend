import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import autobind from 'autobind-decorator';
import Paper from 'material-ui/Paper';

import { processGetMissionDetails } from 'store/mission/selectedMission/selectedMissionActions.js';

const connectDispatch = (dispatch) => ({
  push: (location) => dispatch(push(location)),
  getMissionDetails: (data) => processGetMissionDetails(dispatch, data)
});

const connectState = (state) => ({
  selectedMission: state.app.mission.selectedMission
});

@connect(connectState, connectDispatch)
class MissionDetails extends React.Component {
  static propTypes = {
    push: React.PropTypes.func.isRequired,
    getMissionDetails: React.PropTypes.func.isRequired,
    location: React.PropTypes.object.isRequired,
    selectedMission: React.PropTypes.object.isRequired
  }

  componentWillMount() {
    this.componentWillReceiveProps(this.props);
  }

  componentWillReceiveProps(props) {
    const missionId = props.location.query.missionId;
    if (!props.selectedMission.loadedDate) {
      props.getMissionDetails({ missionId: missionId });
    }
  }

  render() {
    return (
      <div className="mission-details-container">
        <div className="mission-details-container__container">
          <Paper zDepth={1}>
            <div className="paper-container">
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

export default MissionDetails;
