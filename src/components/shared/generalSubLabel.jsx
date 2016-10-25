import React from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

const GeneralSubLabel = (props) => {
  const {
    className,
    messageId
  } = props;

  const classes = classNames([
    'general-sub-label',
    className
  ]
  );

  return (
    <div className={classes}>
      <FormattedMessage id={messageId} />
    </div>
  );
};

GeneralSubLabel.propTypes = {
  className: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.array
  ]),
  messageId: React.PropTypes.string.isRequired
};

export default GeneralSubLabel;
