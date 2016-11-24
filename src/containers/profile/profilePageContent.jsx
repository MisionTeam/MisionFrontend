import React from 'react';

import BasicInfoForm from 'forms/profile/basicInfoForm.jsx';

class ProfilePageContent extends React.Component {
  updateProfile(formData) {
    console.log(formData);
  }
  render() {
    return (
      <div className="profile-content">
        <div className="profile-content container">
          <BasicInfoForm parentSubmit={this.updateProfile} />
        </div>
      </div>
    );
  }
}

export default ProfilePageContent;
