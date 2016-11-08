import React from 'react';

class InputGroup extends React.Component {
  static propTypes = {
    type: React.PropTypes.string.isRequired
  }

  render() {
    const {
      type
    } = this.props;

    switch (type) {
      case 'text': {
        return <input />;
      }
      default: {
        return <input />;
      }
    }
  }
}

export default InputGroup;
