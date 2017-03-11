import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Paper from 'material-ui/Paper';

import { processGetMissionList } from 'store/mission/missionList/missionListActions.js';

const googleMap = window.google.maps;

const connectDispatch = (dispatch) => ({
  push: (location) => dispatch(push(location)),
  getMissionList: () => processGetMissionList(dispatch)
});

const connectState = (state) => ({
  missionList: state.app.mission.missionList
});

@connect(connectState, connectDispatch)
class MissionMap extends React.Component {
  static propTypes = {
    missionList: React.PropTypes.object.isRequired,
    push: React.PropTypes.func.isRequired,
    getMissionList: React.PropTypes.func.isRequired
  }

  componentWillMount() {
    this.componentWillReceiveProps(this.props);
  }

  componentWillReceiveProps(props) {
    if (!props.missionList.loadedDate) {
      this.props.getMissionList();
    }
    if (props.missionList.loadedDate) {
      this.initMap();
    }
  }

  initMap() {
    let currenLocation = {lat: -25.363, lng: 131.044};
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((res) => {
        currenLocation.lat = res.coords.latitude;
        currenLocation.lng = res.coords.longitude;
      });
    } else {
      /* geolocation IS NOT available */
      console.log('geolocation IS NOT available');
    }
    console.log(currenLocation);
    const map = new googleMap.Map(document.getElementById('mission-map'), {
      zoom: 4,
      center: currenLocation
    });
  }

  render() {
    return (
      <div />
    );
  }
}

export default MissionMap;
