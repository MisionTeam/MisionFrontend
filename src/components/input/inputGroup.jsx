import React, { PropTypes } from 'react';
import classNames from 'classnames';

const validPropTypes = {
  meta: React.PropTypes.object,
  input: React.PropTypes.object,
  classname: PropTypes.string
};

const InputText = ({ classname, input, meta }) => {
  console.log(meta);
  return (
    <div className={`${classname}__field`}>
      <input className={`${classname}__input-text`} {...input} type="text" />
      {meta.touched &&
       meta.error &&
        <span className={`${classname}__input-error`}>{meta.error}</span>}
    </div>
  );
};
InputText.propTypes = validPropTypes;

class InputGroup extends React.Component {
  static propTypes = {
    type: React.PropTypes.string.isRequired,
    meta: React.PropTypes.object,
    input: React.PropTypes.object,
    classname: PropTypes.string
  }

  render() {
    const {
      type,
      meta,
      input,
      classname
    } = this.props;

    switch (type) {
      case 'text': {
        return <InputText input={input} meta={meta} classname={classname} />;
      }
      default: {
        return <InputText input={input} meta={meta} classname={classname} />;
      }
    }
  }
}

export default InputGroup;
