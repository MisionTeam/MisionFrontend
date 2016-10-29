import React from 'react';

import HomepageBlockHeader from 'components/home/homepageBlockHeader.jsx';
import ImageWrapper from 'components/shared/imageWrapper.jsx';
import GeneralLabel from 'components/shared/generalLabel.jsx';
import GeneralSubLabel from 'components/shared/generalSubLabel.jsx';

import { missionCategoryImageUrls, missionCategoryLabelIds } from 'utils/constants.js';

class MissionCategoryBlock extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  handleClick() {
    console.log('show more');
  }

  renderImageGrid() {
    return missionCategoryImageUrls.map((imageUrl, index) => {
      return (
        <div className="mission-category__grid-item" key={index}>
          <ImageWrapper className="mission-category" imageUrl={imageUrl} />
          <GeneralLabel messageId={missionCategoryLabelIds[index].labelId} className="mission-category" />
          <GeneralSubLabel messageId={missionCategoryLabelIds[index].subLabelId} className="mission-category" />
        </div>
      );
    });
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
        <div className="mission-category-block__content">
          {
            this.renderImageGrid()
          }
        </div>
      </div>
    );
  }
}

export default MissionCategoryBlock;
