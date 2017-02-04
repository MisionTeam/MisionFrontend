import React from 'react';
import { connect } from 'react-redux';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import restrictedRoute from 'routes/restrictedRoute.jsx';

import CoreLayout from '../layouts/CoreLayout/CoreLayout';
import ErrorPageContainer from 'containers/errorPage/errorPage.jsx';
import HomeContainer from 'containers/home/homeView.jsx';
import MissionContainer from 'containers/mission/missionContainer.jsx';
import MissionListContainer from 'containers/mission/missionList.jsx';
import MissionMapContainer from 'containers/mission/missionMap.jsx';
import ProfileContainer from 'containers/profile/profileContainer.jsx';

const MissionList = () => {
  return (
    <MissionContainer >
      <MissionListContainer />
    </MissionContainer>
  );
};

const MissionMap = () => {
  return (
    <MissionContainer >
      <MissionMapContainer />
    </MissionContainer>
  );
};

@connect()
class RouterRoot extends React.Component {
  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.element
    ]),
    location: React.PropTypes.object.isRequired
  };

  static contextTypes = {
    router: React.PropTypes.object
  };

  render() {
    return (
      <div>
        <CoreLayout children={this.props.children} location={this.props.location} />
      </div>
    );
  };
}

const routes = (
  <Route path="/" component={RouterRoot} >
    <IndexRedirect to="/home" />
    <IndexRoute component={HomeContainer} />
    <Route path="home" component={restrictedRoute({component: HomeContainer})} />
    <Route path="mission">
      <IndexRoute component={restrictedRoute({component: MissionList})} />
      <Route path="list" component={restrictedRoute({component: MissionList})} />
      <Route path="map" component={restrictedRoute({component: MissionMap})} />
    </Route>
    <Route path="get" component={HomeContainer} />
    <Route path="profile">
      <IndexRoute component={restrictedRoute({component: ProfileContainer})} />
      <Route path="info" component={restrictedRoute({component: ProfileContainer})} />
      <Route path="dashboard" component={restrictedRoute({component: ProfileContainer})} />
      <Route path="mylist" component={restrictedRoute({component: ProfileContainer})} />
      <Route path="notifications" component={restrictedRoute({component: ProfileContainer})} />
    </Route>
    <Route path="error" component={restrictedRoute({component: ErrorPageContainer})} />
  </Route>
);

export default routes;
