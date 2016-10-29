import React from 'react';
import LocaleToggleContainer from 'containers/locale/localeToggleContainer.jsx';
import ImageWrapper from 'components/shared/imageWrapper.jsx';
import { FormattedMessage } from 'react-intl';
import Button from 'components/shared/button.jsx';

const HomepageFooter = () => {
  return (
    <div className="homepage-footer">
      <div className="homepage-footer__logo-container">
        <ImageWrapper className="homepage-footer" imageUrl="images/homepage/mision.svg" />
      </div>
      <div className="homepage-footer__contact-us">
        <Button className="contact-us" color="blue" theme="solid" >
          <FormattedMessage id="homepage.footer.contactButton" />
        </Button>
      </div>
      <LocaleToggleContainer />
    </div>
  );
};

export default HomepageFooter;
