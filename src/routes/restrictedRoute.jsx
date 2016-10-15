import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

const connectState = (state) => ({
  auth: state.app.auth
});

const connectDispatch = (dispatch) => ({
  push: (location) => dispatch(push(location))
});

function restrictedRoute({
  component: WrappedComponent
}) {
  @connect(connectState, connectDispatch)
  class RestrictedRoute extends React.Component {

    static propTypes = {
      location: React.PropTypes.object.isRequired,
      auth: React.PropTypes.object.isRequired,
      push: React.PropTypes.func.isRequired,
      children: React.PropTypes.object
    }

    componentWillMount() {
      this.checkAuthAndRedirect(this.props);
    }

    checkAuthAndRedirect(props) {
      const { auth } = props;
      if (auth.toJS().isLoggedIn || location.pathname === '/home') {
        return;
      }
      this.redirect(auth);
    }

    redirect(auth) {
      this.props.push('/home');
    }

    render() {
      return this.props.auth.isLoggedIn || location.pathname === '/home' ? <WrappedComponent {...this.props} /> : null;
    }
  }

  return RestrictedRoute;
}

export default restrictedRoute;
