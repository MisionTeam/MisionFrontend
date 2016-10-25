import React, { PropTypes } from 'react';
import Header from '../../components/Header';
import SiteFooter from 'containers/footer/siteFooter.jsx';
// import './CoreLayout.scss';
// import '../../styles/core.scss';

export const CoreLayout = ({ children }) => (
  <div className="text-center">
    <Header />
    <div className="core-layout__viewport">
      {children}
    </div>
    <SiteFooter />
  </div>
);

CoreLayout.propTypes = {
  children: React.PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ])
};

export default CoreLayout;
