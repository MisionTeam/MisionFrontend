import React from 'react';
import { connect } from 'react-redux';

import ImageWrapper from 'components/shared/imageWrapper.jsx';

const connectState = (state) => ({
  auth: state.app.auth
});

@connect(connectState)
class HeaderContainer extends React.Component {
  static propTypes = {
    auth: React.PropTypes.object.isRequired
  };

  render() {
    const { auth } = this.props;
    return (
      <div className="header">
        header
        <ImageWrapper className="header" imageUrl="images/common/mision_black.svg" />
        <ImageWrapper className="header" imageUrl="images/common/u1_black.svg" />
        <ImageWrapper className="header" imageUrl="images/common/u2_black.svg" />
        <ImageWrapper className="header" imageUrl="images/common/u3_black.svg" />
        <ImageWrapper className="header" imageUrl="images/common/u4_black.svg" />
        <ImageWrapper className="header" imageUrl="images/common/uicon_black.svg" />
      </div>
    );
  }
}

export default HeaderContainer;
