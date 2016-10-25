import React from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

const GeneralLabel = (props) => {
  const {
    className,
    messageId
  } = props;

  const classes = classNames([
    'general-label',
    className
  ]
  );

  return (
    <div className={classes}>
      <FormattedMessage id={messageId} />
    </div>
  );
};

GeneralLabel.propTypes = {
  className: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.array
  ]),
  messageId: React.PropTypes.string.isRequired
};

export default GeneralLabel;
