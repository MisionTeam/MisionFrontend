import React, { PropTypes } from 'react';
import HeaderContainer from 'containers/header/headerContainer.jsx';

export const CoreLayout = ({ children }) => (
  <div className="text-center">
    <div className="core-layout__viewport">
      {children}
    </div>
  </div>
);

CoreLayout.propTypes = {
  children: React.PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ])
};

export default CoreLayout;
