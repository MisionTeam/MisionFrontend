import React from 'react';
import classnames from 'classnames';
import Button from 'components/shared/button.jsx';

class LocaleToggle extends React.Component {
  static propTypes = {
    handleLocaleToggleClick: React.PropTypes.func.isRequired,
    currentLocale: React.PropTypes.string.isRequired,
    className: React.PropTypes.string
  };

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  render() {
    const containerClasses = classnames(
      'locale-toggle',
      this.props.className
    );
    const enClasses = classnames(
      'locale-toggle__link',
      'locale-toggle__link--en',
      this.props.currentLocale !== 'en' && 'locale-toggle__link--clickable'
    );
    const frClasses = classnames(
      'locale-toggle__link',
      'locale-toggle__link--fr',
      this.props.currentLocale !== 'fr' && 'locale-toggle__link--clickable'
    );

    // const currentLocaleClasses = this.props.currentLocale === 'en' ? enClasses : frClasses;
    // const currentLocaleText = this.props.currentLocale === 'en' ? 'EN' : 'FR';

    const availableLocaleClasses = this.props.currentLocale === 'en' ? frClasses : enClasses;
    const availableLocaleText = this.props.currentLocale === 'en' ? 'FR' : 'EN';

    return (
      <div className={containerClasses}>
        <Button
          theme="transparent"
          color="white"
          className={availableLocaleClasses}
          onClick={this.props.handleLocaleToggleClick}
        >
          {availableLocaleText}
        </Button>
      </div>
    );
  }
}

export default LocaleToggle;
