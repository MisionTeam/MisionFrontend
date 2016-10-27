import React from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import Button from 'components/shared/button.jsx';

const HomepageBlockHeader = (props) => {
  const {
    className,
    onClick,
    color = 'blue',
    labelId,
    buttonTextId,
    noButton
  } = props;

  const classes = classNames(
    'homepage-block-header',
    `homepage-block-header--${color}`,
    className
  );

  const template = (
    <div className={classes}>
      <div className="homepage-block-header__label">
        <FormattedMessage id={labelId} />
      </div>
      <div className="homepage-block-header__nav-button">
        {
          !noButton ? (
            <Button className={classes} color={color} theme="transparent" onClick={onClick}>
              <FormattedMessage id={buttonTextId} />
            </Button>
          ) : null
        }
      </div>
    </div>
  );

  return template;
};

HomepageBlockHeader.propTypes = {
  className: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.array
  ]),
  onClick: React.PropTypes.func,
  color: React.PropTypes.string,
  labelId: React.PropTypes.string.isRequired,
  buttonTextId: React.PropTypes.string,
  noButton: React.PropTypes.bool
};

export default HomepageBlockHeader;
