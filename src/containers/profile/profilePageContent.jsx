import React from 'react';

import BasicInfoForm from 'forms/profile/basicInfoForm.jsx';

const basicInforFormInitialValues = {
  firstName: 'Kobe',
  lastName: 'Bryant',
  gender: 'male',
  age: '37',
  email: 'kobe@kobe.com',
  phone: '11111111111'
};

class ProfilePageContent extends React.Component {
  updateProfile(formData) {
    console.log(formData);
  }
  render() {
    return (
      <div className="profile-content">
        <div className="profile-content__container">
          <BasicInfoForm parentSubmit={this.updateProfile} initialValues={basicInforFormInitialValues} />
        </div>
      </div>
    );
  }
}

export default ProfilePageContent;
