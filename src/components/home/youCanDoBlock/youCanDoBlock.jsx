import React from 'react';

import HomepageBlockHeader from 'components/home/homepageBlockHeader.jsx';
import ImageWrapper from 'components/shared/imageWrapper.jsx';
import GeneralLabel from 'components/shared/generalLabel.jsx';
import GeneralSubLabel from 'components/shared/generalSubLabel.jsx';

import { youCanDoBlockImageUrls, youCanDoBlockLabelIds } from 'utils/constants.js';

class YouCanDoBlock extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  handleClick() {
    console.log('post a mission');
  }

  renderImageGrid() {
    return youCanDoBlockImageUrls.map((imageUrl, index) => {
      return (
        <div className="you-can-do__grid-item" key={index}>
          <ImageWrapper className="you-can-do" imageUrl={imageUrl} />
          <div className="you-can-do__label-wrapper">
            <GeneralLabel messageId={youCanDoBlockLabelIds[index].labelId} className="you-can-do" />
            <GeneralSubLabel messageId={youCanDoBlockLabelIds[index].subLabelId_1} className="you-can-do" />
            <GeneralSubLabel messageId={youCanDoBlockLabelIds[index].subLabelId_2} className="you-can-do" />
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="you-can-do">
        <div className="you-can-do__header">
          <HomepageBlockHeader
            className="you-can-do"
            onClick={this.handleClick}
            color="white"
            labelId="homepage.youCanDo.headerLabel"
            buttonTextId="homepage.youCanDo.buttonLabel"
            />
        </div>
        <div className="you-can-do__content">
          <div className="you-can-do__left-image-container">
            <ImageWrapper className="you-can-do__left-image-container" imageUrl="images/homepage/uicon.svg" />
          </div>
          <div className="you-can-do__right-image-container">
            {
              this.renderImageGrid()
            }
          </div>
        </div>
      </div>
    );
  }
}

export default YouCanDoBlock;
