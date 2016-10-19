import React from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import { Button } from 'react-bootstrap';

import FacebookLoginContainer from 'containers/facebookLogin/FacebookLoginContainer.jsx';
import HeaderInfoContainer from 'containers/headerInfo/HeaderInfoContainer.jsx';

import { processUserLogin, processUserLogout } from 'store/auth/authActions.js';

const connectState = (state) => ({
  profile: state.app.profile,
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
    profile: React.PropTypes.object.isRequired,
    logout: React.PropTypes.func.isRequired
  };

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
          auth.isLoggedIn ?
            <div>
              <HeaderInfoContainer />
              <Button className="logout-button" bsStyle="primary" onClick={this.handleLogout} >Log out</Button>
            </div> : <FacebookLoginContainer />
        }
      </div>
    );
  }
}

export default LoginContainer;
