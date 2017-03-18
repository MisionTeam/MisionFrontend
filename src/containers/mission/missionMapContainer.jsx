import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import autobind from 'autobind-decorator';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import { FormattedMessage } from 'react-intl';

import { processGetMissionList } from 'store/mission/missionList/missionListActions.js';

const googleMap = window.google.maps;

const locations = [
  {
    name: 'Location 1',
    geoCoords: {
      lat: 43.66323,
      lng: -79.4055321
    }
  },
  {
    name: 'Location 2',
    geoCoords: {
      lat: 43.6527358,
      lng: -79.4004681
    }
  },
  {
    name: 'Location 3',
    geoCoords: {
      lat: 43.6532326,
      lng: -79.3875076
    }
  },
  {
    name: 'Location 4',
    geoCoords: {
      lat: 43.6596907,
      lng: -79.3829586
    }
  },
  {
    name: 'Location 5',
    geoCoords: {
      lat: 43.6650927,
      lng: -79.3845894
    }
  },
  {
    name: 'Location 6',
    geoCoords: {
      lat: 43.6608084,
      lng: -79.4013264
    }
  },
  {
    name: 'Location 7',
    geoCoords: {
      lat: 43.6523631,
      lng: -79.3995239
    }
  }
];

const InfoWindow = ({element, action}) => (
  <MuiThemeProvider>
    <div className="info-window">
      <div className="info-window__content">
        {element.name}
      </div>
      <div className="info-window__actions">
        <FlatButton label="View Details" onClick={action} />
      </div>
    </div>
  </MuiThemeProvider>
);
InfoWindow.propTypes = {
  element: React.PropTypes.object.isRequired,
  action: React.PropTypes.func.isRequired
};

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
  constructor(props) {
    super(props);
    this.map = null;
    this.markers = [];
    this.infoWindows = [];
  }
  state = {
    mapDOM: null,
    currentOpenInfoWindowIndex: null
  }

  componentWillMount() {
    this.componentWillReceiveProps(this.props);
  }

  componentWillReceiveProps(props) {
    if (!props.missionList.loadedDate) {
      this.props.getMissionList();
    }
  }

  @autobind
  initMap() {
    let currenLocation = {lat: 43.7181552, lng: -79.5184852};
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((res) => {
        currenLocation.lat = res.coords.latitude;
        currenLocation.lng = res.coords.longitude;
        this.map = new googleMap.Map(this.state.mapDOM, {
          zoom: 13,
          center: currenLocation
        });
        this.initInfoWindows();
        this.initMarkers();
        this.map.addListener('click', () => {
          if (this.state.currentOpenInfoWindowIndex !== null) {
            this.infoWindows[this.state.currentOpenInfoWindowIndex].close();
            this.setState({
              currentOpenInfoWindowIndex: null
            });
          }
        });
      });
    } else {
      /* geolocation IS NOT available */
      console.log('geolocation IS NOT available');
    }
  }

  initMarkers() {
    locations.map((location, index) => {
      const marker = new googleMap.Marker({
        position: location.geoCoords,
        map: this.map
      });
      marker.addListener('click', () => {
        if (this.state.currentOpenInfoWindowIndex !== null && this.markers.indexOf(marker) !== this.state.currentOpenInfoWindowIndex) {
          this.infoWindows[this.state.currentOpenInfoWindowIndex].close();
          this.setState({
            currentOpenInfoWindowIndex: null
          });
        }
        this.infoWindows[index].open(this.map, marker);
        this.setState({
          currentOpenInfoWindowIndex: index
        });
      });
      this.markers.push(marker);
    });
  }

  initInfoWindows() {
    locations.map((location) => {
      const div = document.createElement('div');
      ReactDOM.render(
        <InfoWindow element={location} action={() => this.viewDetails(location)} />,
        div
      );
      this.infoWindows.push(
        new googleMap.InfoWindow({
          content: div
        })
      );
    });
  }

  viewDetails(mission) {
    console.log(mission.name);
  }

  render() {
    const { mapDOM } = this.state;
    return (
      <div className="mission-map-container">
        <Paper zDepth={1}>
          <div className="paper-container">
            <div className="mission-map__header">
              <div className="mission-map__header-text">
                <FormattedMessage id="mission.map.header" />
              </div>
            </div>
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
                }} />
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default MissionMapContainer;
