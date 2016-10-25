import React from 'react';
import classNames from 'classnames';
import LocaleToggleContainer from 'containers/locale/localeToggleContainer.jsx';

const SiteFooter = (props) => {
  return (
    <div className="site-footer">
      <LocaleToggleContainer />
    </div>
  );
};

export default SiteFooter;
