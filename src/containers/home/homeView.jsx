import React from 'react';
import 'containers/home/homeView.scss';

import WelcomeBlock from 'components/home/welcomeBlock/welcomeBlock.jsx';
import MissionCategoryBlock from 'components/home/missionCategoryBlock/missionCategoryBlock.jsx';
import WeHaveBlock from 'components/home/weHaveBlock/weHaveBlock.jsx';
import YouCanBeBlock from 'components/home/youCanBeBlock/youCanBeBlock.jsx';
import YouCanDoBlock from 'components/home/youCanDoBlock/youCanDoBlock.jsx';
import WeAreBlock from 'components/home/weAreBlock/weAreBlock.jsx';
import HomepageFooter from 'components/home/footer/homepageFooter.jsx';
import HomepageBlock from 'layouts/homepageBlock/homepageBlock.jsx';

class HomeContainer extends React.Component {
  render() {
    return (
      <div className="home-view">
        <HomepageBlock className="welcome" >
          <WelcomeBlock />
        </HomepageBlock>
        <HomepageBlock className="mission-category" >
          <MissionCategoryBlock />
        </HomepageBlock>
        <HomepageBlock className="we-have" >
          <WeHaveBlock />
        </HomepageBlock>
        <HomepageBlock className="you-can-be" >
          <YouCanBeBlock />
        </HomepageBlock>
        <HomepageBlock className="you-can-do" >
          <YouCanDoBlock />
        </HomepageBlock>
        <HomepageBlock className="we-are" >
          <WeAreBlock />
        </HomepageBlock>
        <HomepageBlock className="homepage-footer" >
          <HomepageFooter />
        </HomepageBlock>
      </div>
    );
  }
}

export default HomeContainer;
