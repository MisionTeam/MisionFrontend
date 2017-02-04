import React from 'react';
import { FormattedMessage } from 'react-intl';

import Link from 'components/shared/link.jsx';
import ImageWrapper from 'components/shared/imageWrapper.jsx';
import { activeClassNameGenerator } from 'utils/generalUtils.js';

class SideNavBar extends React.Component {
  renderAvatarLink() {
    return (
      <div className="avatar">
        <div className="avatar-container">
          <ImageWrapper className="profile-avatar" imageUrl="../images/common/kobe.png" />
          <div className="profile-name">
            <span>Kobe Bryant</span>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="side-nav-bar">
        <div className="side-nav-bar__container">
          <div className={activeClassNameGenerator('side-nav-bar__link-row avatar', ['/profile/info', '/profile'])}>
            <div className="side-nav-bar__link-wrapper">
              <Link className="side-nav-bar__personal-info" activeClassName="personal-info--active" to="/profile/info">{this.renderAvatarLink()}</Link>
            </div>
          </div>
          <div className={activeClassNameGenerator('side-nav-bar__link-row', ['/profile/dashboard'])}>
            <div className="side-nav-bar__link-wrapper">
              <Link className="side-nav-bar__dashboard" activeClassName="activity-center--active" to="/profile/dashboard">
                <ImageWrapper className="side-nav-bar__icon" imageUrl="../images/common/home.svg" />
                <FormattedMessage id="sideNavBar.linkLabel.dashboard" />
              </Link>
            </div>
          </div>
          <div className={activeClassNameGenerator('side-nav-bar__link-row', ['/profile/mylist'])}>
            <div className="side-nav-bar__link-wrapper">
              <Link className="side-nav-bar__my-list" activeClassName="my-list--active" to="/profile/mylist">
                <ImageWrapper className="side-nav-bar__icon" imageUrl="../images/common/home.svg" />
                <FormattedMessage id="sideNavBar.linkLabel.myList" />
              </Link>
            </div>
          </div>
          <div className={activeClassNameGenerator('side-nav-bar__link-row', ['/profile/notifications'])}>
            <div className="side-nav-bar__link-wrapper">
              <Link className="side-nav-bar__notifications" activeClassName="notifications--active" to="/profile/notifications">
                <ImageWrapper className="side-nav-bar__icon" imageUrl="../images/common/home.svg" />
                <FormattedMessage id="sideNavBar.linkLabel.notifications" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideNavBar;
