import React from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';

import FacebookLoginContainer from 'containers/facebookLogin/FacebookLoginContainer.jsx';

import { processUserLogin, processUserLogout } from 'store/auth/authActions.js';

const connectState = (state) => ({
  member: state.app.member,
  auth: state.app.auth
});

const dispatchConnect = (dispatch) => ({
  login: (data) => processUserLogin(dispatch, data),
  logout: () => processUserLogout(dispatch)
});

@connect(connectState, dispatchConnect)
class LoginContainer extends React.Component {
  static propTypes = {
    auth: React.PropTypes.object.isRequired,
    member: React.PropTypes.object.isRequired,
    login: React.PropTypes.func.isRequired,
    logout: React.PropTypes.func.isRequired
  };

  @autobind
  handleLogin() {
    this.props.login().then((response) => {
      console.log(response);
    });
  }

  @autobind
  handleLogout() {
    this.props.logout();
    console.log('logout');
  }

  render() {
    const { auth } = this.props;
    return (
      <div className="login-container">
        {
          auth.isLoggedIn ? <div>You are logged in</div> : <FacebookLoginContainer />
        }
      </div>
    );
  }
}

export default LoginContainer;
