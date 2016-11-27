import React from 'react';
import { FormattedMessage } from 'react-intl';
import autobind from 'autobind-decorator';

import BasicInfoForm from 'forms/profile/basicInfoForm.jsx';
import Pointer from 'layouts/pointer/pointer.jsx';

const basicInforFormInitialValues = {
  firstName: 'Kobe',
  lastName: 'Bryant',
  gender: 'male',
  age: '37',
  email: 'kobe@kobe.com',
  phone: '11111111111'
};

const validPropTypes = {
  expandForm: React.PropTypes.func.isRequired,
  formName: React.PropTypes.string.isRequired
};

const FormGroupHeader = ({ expandForm, formName }) => {
  return (
    <div className="form-group-header" onClick={() => expandForm(formName)}>
      <Pointer color="blue" />
      <div className="form-group-header__form-title">
        <FormattedMessage id="profile.basicInfoForm.formTitle" />
      </div>
    </div>
  );
};
FormGroupHeader.propTypes = validPropTypes;

class ProfilePageContent extends React.Component {
  state = {
    isExpanded: {
      basicInfoForm: true
    }
  }

  updateProfile(formData) {
    console.log(formData);
  }

  @autobind
  expandForm(form) {
    const newState = this.state.isExpanded;
    newState[form] = !newState[form];
    this.setState({
      isExpanded: newState
    });
  }
  render() {
    const { isExpanded } = this.state;
    return (
      <div className="profile-content">
        <div className="profile-content__container">
          <div className="profile-content__form-group">
            <FormGroupHeader expandForm={this.expandForm} formName="basicInfoForm" />
            {
              isExpanded.basicInfoForm ?
                <BasicInfoForm parentSubmit={this.updateProfile} initialValues={basicInforFormInitialValues} /> :
                null
            }
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePageContent;
