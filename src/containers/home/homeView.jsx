import React from 'react';
import DuckImage from 'containers/home/assets/Duck.jpg';
import 'containers/home/homeView.scss';
import { FormattedMessage } from 'react-intl';

import LoginContainer from 'containers/login/loginContainer.jsx';

class HomeContainer extends React.Component {
  render() {
    return (
      <div>
        <LoginContainer />
        <h4><FormattedMessage id="Homepage.welcomeMessage" /></h4>
        <img
          alt="This is a duck, because Redux!"
          className="duck"
          src={DuckImage} />
      </div>
    );
  }
}

export default HomeContainer;
