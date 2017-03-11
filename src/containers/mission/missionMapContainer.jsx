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
class MissionMapContainer extends React.Component {
  static propTypes = {
    missionList: React.PropTypes.object.isRequired,
    push: React.PropTypes.func.isRequired,
    getMissionList: React.PropTypes.func.isRequired
  }

  state = {
    mapDOM: null
  }

  componentWillMount() {
    this.componentWillReceiveProps(this.props);
  }

  componentWillReceiveProps(props) {
    if (!props.missionList.loadedDate) {
      this.props.getMissionList();
    }
  }

  initMap() {
    let currenLocation = {lat: -25.363, lng: 131.044};
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((res) => {
        currenLocation.lat = res.coords.latitude;
        currenLocation.lng = res.coords.longitude;
        const map = new googleMap.Map(this.state.mapDOM, {
          zoom: 13,
          center: currenLocation
        });
      });
    } else {
      /* geolocation IS NOT available */
      console.log('geolocation IS NOT available');
    }
  }

  render() {
    const { mapDOM } = this.state;
    return (
      <div className="mission-map-container">
        <Paper zDepth={1}>
          <div className="paper-container">
            <div className="mission-map">
              <div className="mission-map__map-container" id="mission-map"
                ref={(mapNode) => {
                  if (mapNode && !mapDOM) {
                    this.setState({
                      mapDOM: mapNode
                    }, () => {
                      this.initMap();
                    });
                  }
                }}>

              </div>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default MissionMapContainer;
