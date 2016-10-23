import React from 'react';
import { FormattedMessage } from 'react-intl';

import HomepageBlockHeader from 'components/home/homepageBlockHeader.jsx';
import ImageWrapper from 'components/shared/imageWrapper.jsx';

import Image1 from 'static/images/homepage/1need.jpg';
import Image2 from 'static/images/homepage/2need.jpg';

const imageUrls = [
  Image1,
  Image2
];

class MissionCategoryBlock extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  handleClick() {
    console.log('show more');
  }

  renderImageGrid() {
    return imageUrls.map((imageUrl, index) => {
      return <ImageWrapper className="mission-category" imageUrl={imageUrl} key={index} />;
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
