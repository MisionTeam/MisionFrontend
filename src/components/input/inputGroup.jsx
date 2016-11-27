import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

const validPropTypes = {
  meta: React.PropTypes.object,
  input: React.PropTypes.object,
  classname: React.PropTypes.string,
  optionsLabel: React.PropTypes.string,
  checked: React.PropTypes.bool
};

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

class InputGroup extends React.Component {
  static propTypes = {
    type: React.PropTypes.string.isRequired,
    meta: React.PropTypes.object,
    input: React.PropTypes.object,
    classname: React.PropTypes.string,
    optionsLabel: React.PropTypes.string
  }

  render() {
    const {
      type,
      meta,
      input,
      classname,
      optionsLabel
    } = this.props;

    switch (type) {
      case 'text': {
        return <InputText input={input} meta={meta} classname={classname} />;
      }
      case 'radio': {
        return <InputRadio input={input} meta={meta} classname={classname} optionsLabel={optionsLabel} />;
      }
      default: {
        return <InputText input={input} meta={meta} classname={classname} />;
      }
    }
  }
}

export default InputGroup;
