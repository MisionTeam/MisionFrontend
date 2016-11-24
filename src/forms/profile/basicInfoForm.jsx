import React, { PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import validation from 'utils/validation.js';

import InputGroup from 'components/input/inputGroup.jsx';

const validPropTypes = {
  input: React.PropTypes.object.isRequired,
  type: React.PropTypes.string.isRequired,
  meta: React.PropTypes.object.isRequired
};

const UserNameField = ({input, type, meta}) => (
  <InputGroup input={input} type={type} meta={meta} classname="basic-info-form" />
);
UserNameField.propTypes = validPropTypes;

@reduxForm({
  form: 'BasicInfoForm',
  validate: values => ({
    firstName: validation.exists(values.firstName),
    lastName: validation.exists(values.lastName)
  })
})

class BasicInfoForm extends React.Component {
  static propTypes = {
    handleSubmit: React.PropTypes.func.isRequired,
    parentSubmit: React.PropTypes.func.isRequired
  }

  render() {
    const { handleSubmit, parentSubmit } = this.props;
    return (
      <form className="basic-info-form" onSubmit={handleSubmit(parentSubmit)}>

        <div className="basic-info-form__field-wrapper">
          <label className="basic-info-form__label" htmlFor="firstName">First Name</label>
          <Field
            name="firstName"
            component={UserNameField}
            type="text" />
        </div>
        <div className="basic-info-form__field-wrapper">
          <label className="basic-info-form__label" htmlFor="lastName">Last Name</label>
          <Field
            name="lastName"
            component={UserNameField}
            type="text" />
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default BasicInfoForm;
