import React, { Component, PropTypes } from 'react';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { IntlProvider } from 'react-intl';

import { storageManager, STORAGE_TYPES } from 'utils/storageUtils.js';

const localeStorage = storageManager.createOrFetchStorage('locale', STORAGE_TYPES.local);

class AppContainer extends Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
    initialLocale: React.PropTypes.string,
    messages: React.PropTypes.object.isRequired
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { routes, store } = this.props;
    const syncedHistory = syncHistoryWithStore(browserHistory, store);
    const localeCode = localeStorage.get() || this.props.initialLocale;
    const intlData = {
      locale: localeCode,
      messages: this.props.messages.toJS()
    };

    return (
      <Provider store={store}>
        <IntlProvider key={intlData.locale} {...intlData}>
          <div style={{ height: '100%' }}>
            <Router history={syncedHistory} children={routes} />
          </div>
        </IntlProvider>
      </Provider>
    );
  }
}

export default AppContainer;
