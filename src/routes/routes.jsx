import React from 'react';
import { connect } from 'react-redux';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import restrictedRoute from 'routes/restrictedRoute.jsx';

import CoreLayout from '../layouts/CoreLayout/CoreLayout';
import HomeContainer from 'containers/home/homeView.jsx';
import LoginContainer from 'containers/login/loginContainer.jsx';

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
    <IndexRedirect to="/login" />
    <IndexRoute component={LoginContainer} />
    <Route path="login" component={LoginContainer} />
    <Route path="home" component={restrictedRoute({component: HomeContainer})} />
  </Route>
);

export default routes;
