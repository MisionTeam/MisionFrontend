import React, { PropTypes } from 'react';
import Header from '../../components/Header';

export const CoreLayout = ({ children }) => (
  <div className="text-center">
    <Header />
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
