import React from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';

import { processGetUserProfile } from 'store/profile/profileActions.js';

const connectState = (state) => ({
  profile: state.app.profile,
  auth: state.app.auth
});

const dispatchConnect = (dispatch) => ({
  getUserProfile: () => processGetUserProfile(dispatch)
});

@connect(connectState, dispatchConnect)
class HeaderInfoContainer extends React.Component {
  static propTypes = {
    auth: React.PropTypes.object.isRequired,
    profile: React.PropTypes.object.isRequired,
    getUserProfile: React.PropTypes.func.isRequired
  };

  componentWillMount() {
    this.componentWillReceiveProps(this.props);
  }

  componentWillReceiveProps(props) {
    props.getUserProfile();
  }

  render() {
    const member = this.props.profile.member;
    return (
      <div className="header-info">
        {member.firstName} {member.lastName}
      </div>
    );
  }
}

export default HeaderInfoContainer;
