import React from 'react';

import SideNavBar from 'components/sideNavBar/sideNavBar.jsx';
import ProfilePageContent from 'containers/profile/profilePageContent.jsx';

class ProfileContainer extends React.Component {
  render() {
    return (
      <div className="profile">
        <div className="profile container">
          <SideNavBar />
          <ProfilePageContent />
        </div>
      </div>
    );
  }
}

export default ProfileContainer;
