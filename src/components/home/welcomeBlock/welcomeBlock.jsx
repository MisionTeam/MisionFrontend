import React from 'react';
import { FormattedMessage } from 'react-intl';

class WelcomeBlock extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  render() {
    return (
      <div className="welcome-block">
        <div className="welcome-block__welcome-message">
          <FormattedMessage id="Homepage.welcomeMessage" />
        </div>
        <div className="welcome-block__welcome-message">
          <FormattedMessage id="Homepage.welcomeMessage" />
        </div>
      </div>
    );
  }
}

export default WelcomeBlock;
