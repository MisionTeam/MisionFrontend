import React from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import TextField from 'material-ui/TextField';

const validPropTypes = {
  meta: React.PropTypes.object,
  input: React.PropTypes.object,
  classname: React.PropTypes.string,
  optionsLabel: React.PropTypes.string,
  options: React.PropTypes.array,
  checked: React.PropTypes.bool,
  fieldProps: React.PropTypes.object
};

const MaterialInputText = ({ classname, input, meta, fieldProps }) => {
  return (
    <TextField
      className={classname}
      hintText={<FormattedMessage id={fieldProps.label} />}
      floatingLabelText={<FormattedMessage id={fieldProps.label} />}
      errorText={
        meta.touched &&
         meta.error &&
         <span className="text-group__input-error">
           <FormattedMessage id={meta.error} />
         </span>
      }
      {...input}
    />
  );
};
MaterialInputText.propTypes = validPropTypes;

const InputText = ({ classname, input, meta }) => {
  return (
    <div className="text-group__field">
      <input className="text-group__input-text" {...input} type="text" />
      {meta.touched &&
       meta.error &&
        <span className="text-group__input-error">
          <FormattedMessage id={meta.error} />
        </span>}
    </div>
  );
};
InputText.propTypes = validPropTypes;

const InputRadio = ({ classname, input, meta, optionsLabel }) => {
  return (
    <div className="radio-group__field">
      <input className="radio-group__input-text" {...input} type="radio" />
      <div className="basic-info-form__radio-button-label" ><FormattedMessage id={optionsLabel} /></div>
    </div>
  );
};
InputRadio.propTypes = validPropTypes;

const DropdownSelect = ({ classname, input, meta, options }) => {
  return (
    <div className="dropdown-group__field">
      <select className="dropdown-group__select-box" {...input}>
        <option value="">Select a state...</option>
        {
          options.map((option, i) => (
            <option value={option.value} key={i}>{option.name}</option>
          ))
        }
      </select>
      {meta.error &&
        <span className="text-group__input-error">
          <FormattedMessage id={meta.error} />
        </span>}
    </div>
  );
};
DropdownSelect.propTypes = validPropTypes;

const TagsCheckBox = ({ input, meta, classname }) => {
  const className = `tags-check-box ${classname} ${input.value ? 'checked' : 'unchecked'}`;
  return (
    <div className={className}>
      <input className="tags-check-box__input-box" id={input.name} type="checkbox" {...input} checked={input.value} />
      <label className="tags-check-box__input-label" htmlFor={input.name}>{input.name}</label>
    </div>
  );
};
TagsCheckBox.propTypes = validPropTypes;

class InputGroup extends React.Component {
  static propTypes = {
    type: React.PropTypes.string.isRequired,
    meta: React.PropTypes.object,
    input: React.PropTypes.object,
    classname: React.PropTypes.string,
    optionsLabel: React.PropTypes.string,
    options: React.PropTypes.array
  }

  render() {
    const {
      type,
      meta,
      input,
      classname,
      optionsLabel,
      options,
      ...fieldProps
    } = this.props;

    switch (type) {
      case 'text': {
        return <InputText input={input} meta={meta} classname={classname} />;
      }
      case 'materialText': {
        return <MaterialInputText input={input} meta={meta} classname={classname} fieldProps={fieldProps} />;
      }
      case 'radio': {
        return <InputRadio input={input} meta={meta} classname={classname} optionsLabel={optionsLabel} />;
      }
      case 'dropdown': {
        return <DropdownSelect input={input} meta={meta} classname={classname} options={options} />;
      }
      case 'tagsCheckBox': {
        return <TagsCheckBox input={input} meta={meta} classname={classname} />;
      }
      default: {
        return <InputText input={input} meta={meta} classname={classname} />;
      }
    }
  }
}

export default InputGroup;
