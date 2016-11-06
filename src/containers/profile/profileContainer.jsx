import React from 'react';

import SideNavBar from 'components/sideNavBar/sideNavBar.jsx';

class ProfileContainer extends React.Component {
  render() {
    return (
      <div className="profile">
        This is your profile page
        <div className="profile container">
          <SideNavBar />
        </div>
      </div>
    );
  }
}

export default ProfileContainer;
