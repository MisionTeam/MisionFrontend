import React from 'react';

const Pointer = ({ color }) => {
  return (
    <div className={`pointer__dash pointer__dash--${color}`} />
  );
};

Pointer.propTypes = {
  color: React.PropTypes.string
};

export default Pointer;
