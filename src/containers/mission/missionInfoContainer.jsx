import React from 'react';
import autobind from 'autobind-decorator';

class MissionInfoContainer extends React.Component {
  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.element
    ])
  }

  render() {
    return (
      <div className="mission-info">
        {this.props.children}
      </div>
    );
  }
}

export default MissionInfoContainer;
