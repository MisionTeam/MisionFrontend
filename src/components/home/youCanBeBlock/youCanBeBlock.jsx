import React from 'react';

import HomepageBlockHeader from 'components/home/homepageBlockHeader.jsx';
import ImageWrapper from 'components/shared/imageWrapper.jsx';

import { youCanBeBlockImageUrls } from 'utils/constants.js';

class YouCanBeBlock extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  handleClick() {
    console.log('show more');
  }

  renderImageGrid() {
    return youCanBeBlockImageUrls.map((imageUrl, index) => {
      return (
        <div className="you-can-be-grid-item" key={index}>
          <ImageWrapper className="you-can-be" imageUrl={imageUrl} />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="you-can-be-block">
        <div className="you-can-be-block__header">
          <HomepageBlockHeader
            className="you-can-be"
            onClick={this.handleClick}
            color="white"
            labelId="homepage.youCanBeBlock.headerLabel"
            buttonTextId="homepage.youCanBeBlock.buttonLabel"
            />
        </div>
        <div className="you-can-be-block__content">
          {
            this.renderImageGrid()
          }
        </div>
      </div>
    );
  }
}

export default YouCanBeBlock;
