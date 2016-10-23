import React from 'react';
import { FormattedMessage } from 'react-intl';

import HomepageBlockHeader from 'components/home/homepageBlockHeader.jsx'

class MissionCategoryBlock extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  handleClick() {
    console.log('show more');
  }

  render() {
    return (
      <div className="mission-category-block">
        <div className="mission-category-block__header">
          <HomepageBlockHeader
            className="mission-category"
            onClick={this.handleClick}
            color="blue"
            labelId="homepage.missionCategory.headerLabel"
            buttonTextId="homepage.missionCategory.buttonLabel"
            />
        </div>
        <div className="mission-category-block__content"></div>
      </div>
    );
  }
}

export default MissionCategoryBlock;
