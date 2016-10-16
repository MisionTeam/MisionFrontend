import autobind from 'autobind-decorator';
import React from 'react';
import { connect } from 'react-redux';

import { toggleLocale } from 'store/locale/locale.js';
import { getCurrentLocale } from 'utils/intlUtils.js';

import LocaleToggle from 'components/shared/localeToggle.jsx';

const dispatchConnect = (dispatch) => ({
  toggleLocale: () => dispatch(toggleLocale())
});

@connect(null, dispatchConnect)
class LocaleToggleContainer extends React.Component {

  static propTypes = {
    toggleLocale: React.PropTypes.func.isRequired,
    onClick: React.PropTypes.func
  }

  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps;
  }

  @autobind
  handleLocaleToggleClick(e) {
    e.preventDefault();
    this.props.toggleLocale();
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    return <LocaleToggle {...this.props} currentLocale={getCurrentLocale()} handleLocaleToggleClick={this.handleLocaleToggleClick} />;
  }
}

export default LocaleToggleContainer;
