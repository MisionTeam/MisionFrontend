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
      if (auth.isLoggedIn) {
        return;
      }
      this.redirect(auth);
    }

    redirect(auth) {
      this.props.push('/login');
    }

    render() {
      return this.props.auth.isLoggedIn ? <WrappedComponent {...this.props} /> : null;
    }
  }

  return RestrictedRoute;
}

export default restrictedRoute;
