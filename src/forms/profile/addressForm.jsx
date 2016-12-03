import React from 'react';
import { reduxForm, Field } from 'redux-form';
import validation from 'utils/validation.js';
import { FormattedMessage } from 'react-intl';
import {connect} from 'react-redux';

import InputGroup from 'components/input/inputGroup.jsx';
import Button from 'components/shared/button.jsx';
import { stateOptions } from 'utils/constants.js';

const connectState = (state) => ({
  // initialValues: state.app.profile.member.toJS()
});

const validPropTypes = {
  input: React.PropTypes.object.isRequired,
  type: React.PropTypes.string.isRequired,
  meta: React.PropTypes.object.isRequired,
  options: React.PropTypes.array,
  checked: React.PropTypes.bool
};

const InlineTextField = ({input, type, meta}) => (
  <InputGroup input={input} type={type} meta={meta} classname="address-form" />
);
InlineTextField.propTypes = validPropTypes;

const DropdownSelect = ({input, type, meta, options}) => (
  <InputGroup input={input} type={type} meta={meta} classname="address-form" options={options} />
);
DropdownSelect.propTypes = validPropTypes;

@reduxForm({
  form: 'AddressForm',
  validate: values => ({
    street: validation.exists(values.street),
    city: validation.exists(values.city),
    state: validation.exists(values.state),
    postalCode: validation.exists(values.postalCode)
  })
})

@connect(connectState, null)
class AddressForm extends React.Component {
  static propTypes = {
    handleSubmit: React.PropTypes.func.isRequired,
    parentSubmit: React.PropTypes.func.isRequired,
    reset: React.PropTypes.func.isRequired,
    initialValues: React.PropTypes.object.isRequired,
    submitting: React.PropTypes.bool,
    pristine: React.PropTypes.bool,
    error: React.PropTypes.string
  }

  componentWillReceiveProps() {
    console.log(this.props.initialValues);
  }

  render() {
    const { error, handleSubmit, parentSubmit, reset, submitting, pristine } = this.props;
    return (
      <form className="address-form" onSubmit={handleSubmit(parentSubmit)}>

        <div className="address-form__field-wrapper">
          <label className="address-form__label" htmlFor="street"><FormattedMessage id="profile.addressForm.street.label" /></label>
          <div className="address-form__form-field">
            <Field
              name="street"
              component={InlineTextField}
              type="text" />
          </div>
        </div>

        <div className="address-form__field-wrapper">
          <label className="address-form__label" htmlFor="city"><FormattedMessage id="profile.addressForm.city.label" /></label>
          <div className="address-form__form-field">
            <Field
              name="city"
              component={InlineTextField}
              type="text" />
          </div>
        </div>

        <div className="address-form__field-wrapper">
          <label className="address-form__label" htmlFor="state"><FormattedMessage id="profile.addressForm.state.label" /></label>
          <div className="address-form__form-field">
            <Field
              name="state"
              component={DropdownSelect}
              type="dropdown"
              options={stateOptions} />
          </div>
        </div>

        <div className="address-form__field-wrapper">
          <label className="address-form__label" htmlFor="city"><FormattedMessage id="profile.addressForm.postalCode.label" /></label>
          <div className="address-form__form-field">
            <Field
              name="postalCode"
              component={InlineTextField}
              type="text" />
          </div>
        </div>

        {
          error &&
          (
            <div className="address-form__field-wrapper--center">
              <div className="address-form__form-error">
                {error}
              </div>
            </div>
          )
        }

        <div className="address-form__button-wrapper">
          <Button className="address-form__submit-button" color="blue" theme="solid" type="submit" disabled={pristine || submitting}>
            <FormattedMessage id="profile.basicInfoForm.submitButton.label" />
          </Button>
          <Button className="address-form__cancel-button" color="blue" theme="transparent" type="button" onClick={reset} disabled={pristine || submitting}>
            <FormattedMessage id="profile.basicInfoForm.cancelButton.label" />
          </Button>
        </div>
      </form>
    );
  }
}

export default AddressForm;
