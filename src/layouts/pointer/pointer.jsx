import React from 'react';

import Icons from 'components/shared/icons.jsx';

const Pointer = ({ color, useIcon, name, styles }) => {
  return (
    useIcon && name ?
      <Icons name={name} styles={styles} color={color} /> :
      <div className={`pointer__dash pointer__dash--${color}`} />
  );
};

Pointer.propTypes = {
  color: React.PropTypes.string,
  useIcon: React.PropTypes.bool,
  name: React.PropTypes.string,
  styles: React.PropTypes.object
};

export default Pointer;
