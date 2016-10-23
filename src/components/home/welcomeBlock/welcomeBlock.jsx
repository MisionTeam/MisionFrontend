import React from 'react';
import { FormattedMessage } from 'react-intl';

import Button from 'components/shared/button.jsx';

class WelcomeBlock extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  handleClick() {
    console.log('clicked');
  }

  render() {
    return (
      <div className="welcome-block">
        <div className="welcome-block__welcome-message">
          <FormattedMessage id="homepage.welcomeMessage" />
        </div>
        <div className="welcome-block__button-container">
          <Button className="welcome-block__button" onClick={this.handleClick}>
            <FormattedMessage id="common.postMission" />
          </Button>
        </div>
      </div>
    );
  }
}

export default WelcomeBlock;
