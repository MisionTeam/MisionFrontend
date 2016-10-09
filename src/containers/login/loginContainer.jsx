import React from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import {Form, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar} from 'react-bootstrap';

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
    this.props.login();
    console.log('login');
  }

  @autobind
  handleLogout() {
    this.props.logout();
    console.log('logout');
  }

  render() {
    return (
      <div className="login-form">
        <h2>Login</h2>
        <Form>
          <FormGroup controlId="email">
            <ControlLabel>E-mail</ControlLabel>
            <FormControl type="text" ref="email" placeholder="yours@example.com" required />
          </FormGroup>

          <FormGroup controlId="password">
            <ControlLabel>Password</ControlLabel>
            <FormControl type="password" ref="password" placeholder="Password" required />
          </FormGroup>

          <ButtonToolbar>
            <Button type="submit" bsStyle="primary" onClick={this.handleLogin}>Sign In</Button>
          </ButtonToolbar>

          <ButtonToolbar>
            <Button type="submit" bsStyle="primary" onClick={this.handleLogout}>Sign Out</Button>
          </ButtonToolbar>
        </Form>
        <FacebookLoginContainer />
      </div>
    );
  }
}

export default LoginContainer;
