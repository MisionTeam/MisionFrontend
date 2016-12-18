import React from 'react';
import { reduxForm, Field } from 'redux-form';
import validation from 'utils/validation.js';
import { FormattedMessage } from 'react-intl';

import InputGroup from 'components/input/inputGroup.jsx';
import Button from 'components/shared/button.jsx';

const validPropTypes = {
  input: React.PropTypes.object.isRequired,
  type: React.PropTypes.string.isRequired,
  meta: React.PropTypes.object.isRequired,
  checked: React.PropTypes.bool,
  fields: React.PropTypes.array,
  classname: React.PropTypes.string
};

const TagsCheckBox = ({input, type, meta, classname}) => (
  <InputGroup type={type} meta={meta} input={input} classname={classname} />
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

  componentWillMount() {
    console.log(this.props.initialValues);
  }

  renderTagFields(initialValues, isMyTag) {
    const tagNames = Object.keys(initialValues);
    return (
      tagNames.map((tag, index) => {
        return (
          <Field
            name={tag}
            component={TagsCheckBox}
            type="tagsCheckBox"
            key={index}
            classname={`${isMyTag ? 'my-tags' : 'all-tags'}`}
          />
        );
      })
    );
  }
  render() {
    const { handleSubmit, parentSubmit, reset, submitting, pristine, initialValues } = this.props;
    return (
      <form className="personal-tag-form" onSubmit={handleSubmit(parentSubmit)}>

        <div className="personal-tag-form__field-wrapper">
          <label className="personal-tag-form__label"><FormattedMessage id="profile.personalTagForm.myTags.label" /></label>
          <div className="personal-tag-form__form-field my-tags">
            {
              this.renderTagFields(initialValues, true)
            }
          </div>
        </div>

        <div className="personal-tag-form__field-wrapper">
          <label className="personal-tag-form__label"><FormattedMessage id="profile.personalTagForm.allTags.label" /></label>
          <div className="personal-tag-form__form-field all-tags">
            {
              this.renderTagFields(initialValues, false)
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
