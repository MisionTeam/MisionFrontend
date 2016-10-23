import React from 'react';
import 'containers/home/homeView.scss';

import WelcomeBlock from 'components/home/welcomeBlock/welcomeBlock.jsx';
import MissionCategoryBlock from 'components/home/missionCategoryBlock/missionCategoryBlock.jsx';
import HomepageBlock from 'layouts/homepageBlock/homepageBlock.jsx';
import LoginContainer from 'containers/login/loginContainer.jsx';

class HomeContainer extends React.Component {
  render() {
    return (
      <div>
        <LoginContainer />
        <HomepageBlock className="welcome" >
          <WelcomeBlock />
        </HomepageBlock>
        <HomepageBlock className="mission-category" >
          <MissionCategoryBlock />
        </HomepageBlock>
      </div>
    );
  }
}

export default HomeContainer;
