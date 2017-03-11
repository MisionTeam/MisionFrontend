import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import autobind from 'autobind-decorator';
import moment from 'moment';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Pointer from 'layouts/pointer/pointer.jsx';

import { processGetMissionDetails } from 'store/mission/selectedMission/selectedMissionActions.js';

const SectionHeader = ({headerName, iconName}) => (
  <div className="mission-details-content__section-header">
    <Pointer useIcon color="blue" name={iconName} />
    <div className="mission-details-content__section-header-name">
      <FormattedMessage id={`mission.details.sectionHeader.${headerName}`} />
    </div>
  </div>
);
SectionHeader.propTypes = {
  headerName: React.PropTypes.string.isRequired,
  iconName: React.PropTypes.string.isRequired
};

const MissionDetailsContent = ({mission}) => (
  <div className="mission-details-content">
    <div className="mission-details-content__section-wrapper">
      <SectionHeader headerName="price" iconName="money" />
      <div className="mission-details-content__section-content">
        {mission.price}
      </div>
    </div>
    <div className="mission-details-content__section-wrapper">
      <SectionHeader headerName="address" iconName="place" />
      <div className="mission-details-content__section-content">
        {mission.address.street}, {mission.address.city}
      </div>
    </div>
    <div className="mission-details-content__section-wrapper">
      <SectionHeader headerName="description" iconName="description" />
      <div className="mission-details-content__section-content">
        {mission.description}
      </div>
    </div>
  </div>
);
MissionDetailsContent.propTypes = {
  mission: React.PropTypes.object.isRequired
};

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
            <div className="mission-details-card__container">
              <CardTitle
                title={selectedMission.title}
                subtitle={`Date Posted: ${postDate}`}
                titleStyle={{fontWeight: 'bold'}}
              />
              <CardHeader
                className="mission-details__card-header"
                title={`${selectedMission.author.firstName} ${selectedMission.author.lastName}`}
                subtitle="Subtitle"
                avatar="/images/common/kobe.png"
                subtitleStyle={{paddingRight: '0px'}}
              />
              <CardText>
                <MissionDetailsContent mission={selectedMission} />
              </CardText>
              <CardActions>
                <FlatButton label={<FormattedMessage id="mission.details.button.accept" />} onClick={this.handleAccept} />
                <FlatButton label={<FormattedMessage id="mission.details.button.cancel" />} onClick={this.handleCancel} />
              </CardActions>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default MissionDetails;
