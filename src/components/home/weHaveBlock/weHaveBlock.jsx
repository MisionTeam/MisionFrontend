import React from 'react';

import HomepageBlockHeader from 'components/home/homepageBlockHeader.jsx';
import ImageWrapper from 'components/shared/imageWrapper.jsx';
import GeneralLabel from 'components/shared/generalLabel.jsx';
import GeneralSubLabel from 'components/shared/generalSubLabel.jsx';

import { weHaveBlockImageUrls, weHaveBlockLabelIds } from 'utils/constants.js';

class WeHaveBlock extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  handleClick() {
    console.log('post a mission');
  }

  renderImageGrid() {
    return weHaveBlockImageUrls.map((imageUrl, index) => {
      return (
        <div className="we-have-grid-item" key={index}>
          <ImageWrapper className="we-have" imageUrl={imageUrl} />
          <GeneralLabel messageId={weHaveBlockLabelIds[index].labelId} className="we-have" />
          <GeneralSubLabel messageId={weHaveBlockLabelIds[index].subLabelId_1} className="we-have" />
          <GeneralSubLabel messageId={weHaveBlockLabelIds[index].subLabelId_2} className="we-have" />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="we-have-block">
        <div className="we-have-block__header">
          <HomepageBlockHeader
            className="we-have"
            onClick={this.handleClick}
            color="blue"
            labelId="homepage.weHaveBlock.headerLabel"
            buttonTextId="homepage.weHaveBlock.buttonLabel"
            />
        </div>
        <div className="we-have-block__content">
          {
            this.renderImageGrid()
          }
        </div>
      </div>
    );
  }
}

export default WeHaveBlock;
