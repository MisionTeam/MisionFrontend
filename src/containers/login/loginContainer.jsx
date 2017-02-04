import React from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import { push } from 'react-router-redux';

import FacebookLoginContainer from 'containers/facebookLogin/facebookLoginContainer.jsx';
import HeaderInfoContainer from 'containers/headerInfo/headerInfoContainer.jsx';
import Button from 'components/shared/button.jsx';

import { processUserLogin, processUserLogout } from 'store/auth/authActions.js';

const connectState = (state) => ({
  profile: state.app.profile,
  auth: state.app.auth
});

const dispatchConnect = (dispatch) => ({
  login: (data) => processUserLogin(dispatch, data),
  logout: () => processUserLogout(dispatch),
  push: (location) => dispatch(push(location))
});

@connect(connectState, dispatchConnect)
class LoginContainer extends React.Component {
  static propTypes = {
    auth: React.PropTypes.object.isRequired,
    profile: React.PropTypes.object.isRequired,
    logout: React.PropTypes.func.isRequired,
    push: React.PropTypes.func.isRequired
  };

  @autobind
  handleLogout() {
    this.props.logout();
    this.props.push('/home');
  }

  render() {
    const { auth } = this.props;
    return (
      <div className="login-container">
        {
          auth.isLoggedIn ?
            <div className="login-container__logged-in-block">
              <HeaderInfoContainer />
              <Button className="logout-button" onClick={this.handleLogout} >Log out</Button>
            </div> : <FacebookLoginContainer />
        }
      </div>
    );
  }
}

export default LoginContainer;
