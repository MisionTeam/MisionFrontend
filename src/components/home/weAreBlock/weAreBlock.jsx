import React from 'react';

import HomepageBlockHeader from 'components/home/homepageBlockHeader.jsx';
import ImageWrapper from 'components/shared/imageWrapper.jsx';
import GeneralLabel from 'components/shared/generalLabel.jsx';
import GeneralSubLabel from 'components/shared/generalSubLabel.jsx';

import { weAreBlockImageUrls, weAreBlockLabelIds } from 'utils/constants.js';

class WeAreBlock extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  handleClick() {
    console.log('post a mission');
  }

  renderImageGrid() {
    return weAreBlockImageUrls.map((imageUrl, index) => {
      return (
        <div className="we-are__grid-item" key={index}>
          <ImageWrapper className="we-are" imageUrl={imageUrl} />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="we-are">
        <div className="we-are__header">
          <HomepageBlockHeader
            className="we-are"
            onClick={this.handleClick}
            color="blue"
            labelId="homepage.weAre.headerLabel"
            noButton
            />
        </div>
        <div className="we-are__content">
          <div className="we-are__image-grid-container">
            {
              this.renderImageGrid()
            }
          </div>
          <div className="we-are__label-container">
            <GeneralLabel messageId={weAreBlockLabelIds[0].labelId} className="we-are" />
            <GeneralSubLabel messageId={weAreBlockLabelIds[0].subLabelId_1} className="we-are" />
            <GeneralSubLabel messageId={weAreBlockLabelIds[0].subLabelId_2} className="we-are" />
            <GeneralSubLabel messageId={weAreBlockLabelIds[0].subLabelId_3} className="we-are" />
          </div>
        </div>
      </div>
    );
  }
}

export default WeAreBlock;
