import React, { PropTypes } from 'react';
import HeaderContainer from 'containers/header/headerContainer.jsx';

export const CoreLayout = ({ children, location }) => (
  <div className="text-center">
    <HeaderContainer location={location} />
    <div className="core-layout__viewport">
      {children}
    </div>
  </div>
);

CoreLayout.propTypes = {
  children: React.PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]),
  location: React.PropTypes.object.isRequired
};

export default CoreLayout;
