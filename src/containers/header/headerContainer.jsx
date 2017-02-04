import React from 'react';
import {connect} from 'react-redux';

import LoginContainer from 'containers/login/loginContainer.jsx';

import Link from 'components/shared/link.jsx';
import ImageWrapper from 'components/shared/imageWrapper.jsx';

const connectState = (state) => ({
  auth: state.app.auth
});

@connect(connectState, null)
class HeaderContainer extends React.Component {
  static propTypes = {
    auth: React.PropTypes.object.isRequired
  };

  activeClassNameGenerator(baseClassName, linkPath) {
    var classname = baseClassName;

    if (linkPath.includes(window.location.pathname)) {
      classname = `${classname} active`;
    }
    return classname;
  }

  render() {
    const { auth } = this.props;
    return (
      <div className="header">
        <div className="container">
          <div className="header__container">
            <div className="logo__wrapper">
              <div className="header__link-row">
                <div className="header__link-wrapper">
                  <Link className="header__logo-link" to="/home">
                    <ImageWrapper className="header__logo-icon" imageUrl="/images/common/mision_black.svg" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="header__nav-link-wrapper">
              <div className={this.activeClassNameGenerator('header__link-row', ['/home', '/'])}>
                <div className="header__link-wrapper">
                  <Link className="header__home-link" activeClassName="home-link--active" to="/home">
                    <ImageWrapper className="header__home-link-icon" imageUrl="/images/common/homelink.svg" />
                  </Link>
                </div>
              </div>
              <div className={this.activeClassNameGenerator('header__link-row', ['/mission'])}>
                <div className="header__link-wrapper">
                  <Link className="header__post-link" activeClassName="post-link--active" to="/mission">
                    <ImageWrapper className="header__post-link-icon" imageUrl="/images/common/post.svg" />
                  </Link>
                </div>
              </div>
              <div className={this.activeClassNameGenerator('header__link-row', ['/get'])}>
                <div className="header__link-wrapper">
                  <Link className="header__get-link" activeClassName="get-link--active" to="/get">
                    <ImageWrapper className="header__get-link-icon" imageUrl="/images/common/get.svg" />
                  </Link>
                </div>
              </div>
              <div className="header__link-row">
                <div className="header__link-wrapper">
                  <LoginContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderContainer;
