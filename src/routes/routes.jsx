import React from 'react';
import { connect } from 'react-redux';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import restrictedRoute from 'routes/restrictedRoute.jsx';

import CoreLayout from '../layouts/CoreLayout/CoreLayout';
import HomeContainer from 'containers/home/homeView.jsx';
import ProfileContainer from 'containers/profile/profileContainer.jsx';
import ErrorPageContainer from 'containers/errorPage/errorPage.jsx';

@connect()
class RouterRoot extends React.Component {
  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.element
    ])
  };

  static contextTypes = {
    router: React.PropTypes.object
  };

  render() {
    return <CoreLayout children={this.props.children} />;
  };
}

const routes = (
  <Route path="/" component={RouterRoot} >
    <IndexRedirect to="/home" />
    <IndexRoute component={HomeContainer} />
    <Route path="home" component={restrictedRoute({component: HomeContainer})} />
    <Route path="post" component={HomeContainer} />
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
