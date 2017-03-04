import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import autobind from 'autobind-decorator';
import moment from 'moment';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

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

  handleAccept() {
    console.log('clicked');
  }

  @autobind
  handleCancel() {
    console.log('clicked');
    this.props.push('mission');
  }

  render() {
    const { selectedMission } = this.props;
    const postDate = selectedMission.postDate && moment(selectedMission.postDate, 'YYYY-MM-DD').format('YYYY-MM-DD');
    return (
      <div className="mission-details">
        <div className="mission-details__container">
          <Card>
            <CardTitle title={selectedMission.title} subtitle={`Date Posted: ${postDate}`} />
            <CardHeader
              className="mission-details__card-header"
              title={`${selectedMission.author.firstName} ${selectedMission.author.lastName}`}
              subtitle="Subtitle"
              avatar="/images/common/kobe.png"
              subtitleStyle={{paddingRight: '0px'}}
            />
            <CardText>
              {selectedMission.description}
            </CardText>
            <CardActions>
              <FlatButton label={<FormattedMessage id="mission.details.button.accept" />} onClick={this.handleAccept} />
              <FlatButton label={<FormattedMessage id="mission.details.button.cancel" />} onClick={this.handleCancel} />
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}

export default MissionDetails;
