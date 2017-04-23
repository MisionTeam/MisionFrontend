import React from 'react';
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
  label: React.PropTypes.string.isRequired
};

const TextField = ({input, type, meta, label}) => (
  <InputGroup input={input} type={type} meta={meta} label={label} classname="post-mission-form" />
);
TextField.propTypes = validPropTypes;

@reduxForm({
  form: 'PostMissionForm',
  validate: values => ({
    missionTitle: validation.exists(values.missionTitle)
  })
})

@connect(connectState, null)
class AddressForm extends React.Component {
  static propTypes = {
    handleSubmit: React.PropTypes.func.isRequired,
    parentSubmit: React.PropTypes.func.isRequired,
    reset: React.PropTypes.func.isRequired,
    submitting: React.PropTypes.bool,
    pristine: React.PropTypes.bool,
    error: React.PropTypes.string
  }

  render() {
    const { error, handleSubmit, parentSubmit, reset, submitting, pristine } = this.props;
    return (
      <form className="post-mission-form" onSubmit={handleSubmit(parentSubmit)}>

        <div className="post-mission-form__field-wrapper">
          <div className="post-mission-form__form-field">
            <Field
              name="missionTitle"
              label="postMission.postMissionForm.missionTitle"
              component={TextField}
              type="materialText" />
          </div>
        </div>

        <div className="post-mission-form__button-wrapper">
          <Button className="post-mission-form__submit-button" color="blue" theme="solid" type="submit" disabled={pristine || submitting}>
            <FormattedMessage id="profile.basicInfoForm.submitButton.label" />
          </Button>
          <Button className="post-mission-form__cancel-button" color="blue" theme="transparent" type="button" onClick={reset} disabled={pristine || submitting}>
            <FormattedMessage id="profile.basicInfoForm.cancelButton.label" />
          </Button>
        </div>
      </form>
    );
  }
}

export default AddressForm;
