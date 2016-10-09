import React from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import { Button } from 'react-bootstrap';

import { processgetFacebookLoginStatus } from 'store/facebookLogin/facebookLoginActions.js';

const connectState = (state) => ({
});

const dispatchConnect = (dispatch) => ({
  getFacebookLoginStatus: (cb) => processgetFacebookLoginStatus(dispatch, cb)
});

@connect(connectState, dispatchConnect)
class FacebookLoginContainer extends React.Component {
  static propTypes = {
    getFacebookLoginStatus: React.PropTypes.func.isRequired
  };

  componentDidMount() {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: '899888736779528',
        cookie: true,  // enable cookies to allow the server to access the session
        xfbml: true,  // parse social plugins on this page
        version: 'v2.5' // use graph api version 2.5
      });
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
    console.log('app login');
  }

  @autobind
  handleFacebookLogin() {
    this.props.getFacebookLoginStatus((response) => {
      console.log(response);
      if (response.status === 'connected') {
        console.log('logged in');
      } else if (response.status === 'not_authorized') {
        this.handleAppLogin();
      } else {
        window.FB.login((response) => {
          console.log(response);
          this.handleAppLogin();
        }, (error) => {
          console.log(error);
        });
      }
    });
  }

  render() {
    return (
      <Button className="facebook-login-button" bsStyle="primary" onClick={this.handleFacebookLogin} >Login with Facebook</Button>
    );
  }
}

export default FacebookLoginContainer;
