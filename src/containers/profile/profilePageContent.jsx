import React from 'react';
import { FormattedMessage } from 'react-intl';
import autobind from 'autobind-decorator';
import { SubmissionError } from 'redux-form';

import BasicInfoForm from 'forms/profile/basicInfoForm.jsx';
import AddressForm from 'forms/profile/addressForm.jsx';
import Pointer from 'layouts/pointer/pointer.jsx';

const basicInforFormInitialValues = {
  firstName: 'Kobe',
  lastName: 'Bryant',
  gender: 'male',
  age: '37',
  email: 'kobe@kobe.com',
  phone: '11111111111'
};

const addressFormInitialValues = {
  street: '1 Yonge Street',
  city: 'Toronto',
  state: 'ON',
  country: 'Canada',
  postalCode: 'M1P4Z4'
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
        <FormattedMessage id={`profile.${formName}.formTitle`} />
      </div>
    </div>
  );
};
FormGroupHeader.propTypes = validPropTypes;

class ProfilePageContent extends React.Component {
  state = {
    isExpanded: {
      basicInfoForm: true,
      addressForm: true
    }
  }

  @autobind
  updateAddress(formData) {
    const geocoder = new window.google.maps.Geocoder();
    const addressString = `${formData.street}, ${formData.city}, ${formData.state}`;
    const geoCoding = new Promise((resolve, reject) => {
      geocoder.geocode({
        address: addressString,
        componentRestrictions: {
          country: 'CA',
          postalCode: formData.postalCode
        }
      }, (results, status) => {
        if (status === 'OK') {
          resolve(results);
        } else {
          reject();
        }
      });
    });

    return geoCoding.then((res) => {
      this.updateProfile(
        formData,
        {
          lat: res[0].geometry.location.lat(),
          lng: res[0].geometry.location.lng()
        }
      );
    }).catch(() => {
      throw new SubmissionError({_error: 'Unrecognized Address!'});
    });
  }

  updateProfile(formData, geoCode) {
    console.log(formData);
    console.log(geoCode);
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
                <BasicInfoForm parentSubmit={this.updateProfile} discardForm={this.discardForm} initialValues={basicInforFormInitialValues} /> :
                null
            }
          </div>
          <div className="profile-content__form-group">
            <FormGroupHeader expandForm={this.expandForm} formName="addressForm" />
            {
              isExpanded.addressForm ?
                <AddressForm parentSubmit={this.updateAddress} discardForm={this.discardForm} initialValues={addressFormInitialValues} /> :
                null
            }
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePageContent;
