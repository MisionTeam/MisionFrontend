import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import ImageWrapper from 'components/shared/imageWrapper.jsx';
import Button from 'components/shared/button.jsx';

const connectState = (state) => ({
  error: state.app.error
});

@connect(connectState)
class ErrorPageContainer extends React.Component {
  static propTypes = {
    error: React.PropTypes.object.isRequired
  };

  render() {
    const { error } = this.props;
    return (
      <div className="error-page">
        <div className="error-page container">
          <div className="error-page__inner">
            <div className="error-page__content">
              <ImageWrapper className="error-page" imageUrl="images/error/error_left.svg" />
              <div className="error-page__description">
                <FormattedMessage id={error.description} />
              </div>
              <ImageWrapper className="error-page" imageUrl="images/error/error_right.svg" />
            </div>
            <div className="error-page__actions">
              <Button className="error-page" onClick={error.callback} theme="solid" color="blue">
                <FormattedMessage id={error.id} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorPageContainer;
