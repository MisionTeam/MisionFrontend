import React, { PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import validation from 'utils/validation.js';
import { FormattedMessage } from 'react-intl';
import {connect} from 'react-redux';

import InputGroup from 'components/input/inputGroup.jsx';
import Button from 'components/shared/button.jsx';

const connectState = (state) => ({
  // initialValues: state.app.profile.member.toJS()
});

const validPropTypes = {
  input: React.PropTypes.object.isRequired,
  type: React.PropTypes.string.isRequired,
  meta: React.PropTypes.object.isRequired,
  optionsLabel: React.PropTypes.string,
  checked: React.PropTypes.bool
};

const InlineTextField = ({input, type, meta}) => (
  <InputGroup input={input} type={type} meta={meta} classname="basic-info-form" />
);
InlineTextField.propTypes = validPropTypes;

const InlineRadioButton = ({input, type, meta, optionsLabel, checked}) => (
  <InputGroup input={input} type={type} meta={meta} classname="basic-info-form" optionsLabel={optionsLabel} checked={checked} />
);
InlineRadioButton.propTypes = validPropTypes;

@reduxForm({
  form: 'BasicInfoForm',
  validate: values => ({
    firstName: validation.exists(values.firstName),
    lastName: validation.exists(values.lastName),
    gender: validation.exists(values.gender),
    age: validation.exists(values.age),
    email: validation.exists(values.email)
  })
})

@connect(connectState, null)
class BasicInfoForm extends React.Component {
  static propTypes = {
    handleSubmit: React.PropTypes.func.isRequired,
    parentSubmit: React.PropTypes.func.isRequired,
    reset: React.PropTypes.func.isRequired,
    initialValues: React.PropTypes.object.isRequired,
    submitting: React.PropTypes.bool,
    pristine: React.PropTypes.bool
  }

  componentWillReceiveProps() {
    console.log(this.props.initialValues);
  }

  render() {
    const { handleSubmit, parentSubmit, reset, submitting, pristine } = this.props;
    return (
      <form className="basic-info-form" onSubmit={handleSubmit(parentSubmit)}>

        <div className="basic-info-form__field-wrapper">
          <label className="basic-info-form__label" htmlFor="firstName"><FormattedMessage id="profile.basicInfoForm.firstName.label" /></label>
          <div className="basic-info-form__form-field">
            <Field
              name="firstName"
              component={InlineTextField}
              type="text" />
          </div>
        </div>
        <div className="basic-info-form__field-wrapper">
          <label className="basic-info-form__label" htmlFor="lastName"><FormattedMessage id="profile.basicInfoForm.lastName.label" /></label>
          <div className="basic-info-form__form-field">
            <Field
              name="lastName"
              component={InlineTextField}
              type="text" />
          </div>
        </div>
        <div className="basic-info-form__field-wrapper">
          <label className="basic-info-form__label" htmlFor="gender"><FormattedMessage id="profile.basicInfoForm.gender.label" /></label>
          <div className="basic-info-form__form-field">
            <Field
              name="gender"
              component={InlineRadioButton}
              type="radio"
              optionsLabel="profile.basicInfoForm.gender.options.male"
              value="male" />
            <Field
              name="gender"
              component={InlineRadioButton}
              type="radio"
              optionsLabel="profile.basicInfoForm.gender.options.female"
              value="female" />
          </div>
        </div>
        <div className="basic-info-form__field-wrapper">
          <label className="basic-info-form__label" htmlFor="age"><FormattedMessage id="profile.basicInfoForm.age.label" /></label>
          <div className="basic-info-form__form-field">
            <Field
              name="age"
              component={InlineTextField}
              type="text" />
          </div>
        </div>
        <div className="basic-info-form__field-wrapper">
          <label className="basic-info-form__label" htmlFor="email"><FormattedMessage id="profile.basicInfoForm.email.label" /></label>
          <div className="basic-info-form__form-field">
            <Field
              name="email"
              component={InlineTextField}
              type="text" />
          </div>
        </div>
        <div className="basic-info-form__field-wrapper">
          <label className="basic-info-form__label" htmlFor="phone"><FormattedMessage id="profile.basicInfoForm.phone.label" /></label>
          <div className="basic-info-form__form-field">
            <Field
              name="phone"
              component={InlineTextField}
              type="text" />
          </div>
        </div>

        <div className="basic-info-form__button-wrapper">
          <Button className="basic-info-form__submit-button" color="blue" theme="solid" type="submit" disabled={pristine || submitting}>
            <FormattedMessage id="profile.basicInfoForm.submitButton.label" />
          </Button>
          <Button className="basic-info-form__cancel-button" color="blue" theme="transparent" type="button" onClick={reset} disabled={pristine || submitting}>
            <FormattedMessage id="profile.basicInfoForm.cancelButton.label" />
          </Button>
        </div>
      </form>
    );
  }
}

export default BasicInfoForm;
