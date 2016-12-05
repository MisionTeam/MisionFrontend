import React from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';

import { processGetUserFullProfile } from 'store/profile/profileActions.js';

const connectState = (state) => ({
  profile: state.app.profile,
  auth: state.app.auth
});

const dispatchConnect = (dispatch) => ({
  getUserFullProfile: () => processGetUserFullProfile(dispatch)
});

@connect(connectState, dispatchConnect)
class HeaderInfoContainer extends React.Component {
  static propTypes = {
    auth: React.PropTypes.object.isRequired,
    profile: React.PropTypes.object.isRequired,
    getUserFullProfile: React.PropTypes.func.isRequired
  };

  componentDidMount() {
    this.handleGetUserProfile();
  }

  @autobind
  handleGetUserProfile() {
    this.props.getUserFullProfile();
  }

  render() {
    const profile = this.props.profile.toJS();
    return (
      <div className="header-info">
        {profile.firstName} {profile.lastName}
      </div>
    );
  }
}

export default HeaderInfoContainer;
