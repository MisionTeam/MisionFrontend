import React from 'react';
import { reduxForm, Field } from 'redux-form';
import validation from 'utils/validation.js';
import { FormattedMessage } from 'react-intl';

import InputGroup from 'components/input/inputGroup.jsx';
import Button from 'components/shared/button.jsx';

const tags = [
  {
    name: 'Tag1',
    value: true
  },
  {
    name: 'Tag2',
    value: false
  }
];

const validPropTypes = {
  input: React.PropTypes.object.isRequired,
  type: React.PropTypes.string.isRequired,
  meta: React.PropTypes.object.isRequired,
  checked: React.PropTypes.bool,
  fields: React.PropTypes.array
};

const TagsCheckBox = ({input, type, meta}) => (
  <InputGroup type={type} meta={meta} input={input} classname="personal-tag-form" />
);
TagsCheckBox.propTypes = validPropTypes;

@reduxForm({
  form: 'PersonalTagForm',
  validate: values => ({
  })
})

class PersonalTagForm extends React.Component {
  static propTypes = {
    handleSubmit: React.PropTypes.func.isRequired,
    parentSubmit: React.PropTypes.func.isRequired,
    reset: React.PropTypes.func.isRequired,
    initialValues: React.PropTypes.object,
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
      <form className="personal-tag-form" onSubmit={handleSubmit(parentSubmit)}>

        <div className="personal-tag-form__field-wrapper">
          <div className="personal-tag-form__form-field">
            {
              tags.map((tag, index) => (
                <Field
                  name={tag.name}
                  component={TagsCheckBox}
                  type="tagsCheckBox"
                  key={index}
                />
              ))
            }
          </div>
        </div>

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

export default PersonalTagForm;
