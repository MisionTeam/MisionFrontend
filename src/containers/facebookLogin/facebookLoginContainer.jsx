import React from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import { push } from 'react-router-redux';
import { FormattedMessage } from 'react-intl';

import { processUserLogin } from 'store/auth/authActions.js';
import { processgetFacebookLoginStatus } from 'store/facebookLogin/facebookLoginActions.js';
import Button from 'components/shared/button.jsx';

const connectState = (state) => ({
  auth: state.app.auth
});

const dispatchConnect = (dispatch) => ({
  getFacebookLoginStatus: (cb) => processgetFacebookLoginStatus(dispatch, cb),
  login: (data) => processUserLogin(dispatch, data),
  push: (location) => dispatch(push(location))
});

@connect(connectState, dispatchConnect)
class FacebookLoginContainer extends React.Component {
  static propTypes = {
    auth: React.PropTypes.object.isRequired,
    login: React.PropTypes.func.isRequired,
    getFacebookLoginStatus: React.PropTypes.func.isRequired,
    push: React.PropTypes.func.isRequired
  };

  componentWillMount() {
    this.componentWillReceiveProps(this.props);
  }

  componentWillReceiveProps(props) {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: '899888736779528',
        cookie: true,  // enable cookies to allow the server to access the session
        xfbml: true,  // parse social plugins on this page
        version: 'v2.5' // use graph api version 2.5
      });
      props.getFacebookLoginStatus();
    };
    ((d, s, id) => {
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/en_US/all.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }

  @autobind
  handleAppLogin() {
    const { facebookLogin } = this.props.auth;
    this.props.login(facebookLogin.toJS().authResponse.accessToken).then((response) => {
      this.props.push('/home');
    });
  }

  @autobind
  handleFacebookLogin() {
    if (this.props.auth.toJS().facebookLogin.status !== 'connected') {
      window.FB.login((response) => {
        this.checkFacebookLoginState();
      }, (error) => {
        console.log(error);
      });
    } else {
      this.handleAppLogin();
    }
  }

  @autobind
  checkFacebookLoginState() {
    console.log('here');
    this.props.getFacebookLoginStatus((response) => {
      if (response.status === 'connected') {
        this.handleAppLogin();
      } else {
        console.log(response);
      }
    });
  }

  render() {
    return (
      <Button className="facebook-login-button" onClick={this.handleFacebookLogin} ><FormattedMessage id="homepage.facebookLogin.LoginButton" /></Button>
    );
  }
}

export default FacebookLoginContainer;
