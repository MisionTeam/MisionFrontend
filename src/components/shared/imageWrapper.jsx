import React from 'react';
import classNames from 'classnames';

const ImageWrapper = (props) => {
  const {
    className,
    imageUrl
  } = props;

  const classes = classNames(
    `image-wrapper-${className}`
  );

  return (
    <div className={classes}>
      <img src={imageUrl} />
    </div>
  );
};

ImageWrapper.propTypes = {
  className: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.array
  ]),
  imageUrl: React.PropTypes.string.isRequired
};

export default ImageWrapper;
