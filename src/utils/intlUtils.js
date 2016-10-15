/**
* This file has a couple of utils that determine the locale, and whether or not the `Intl` API is supported in the
* current context. It is run as part of the `bootSequence` in `init.js`.
*/
import { addLocaleData as addReactIntlLocaleData } from 'react-intl';
import areIntlLocalesSupported from 'intl-locales-supported';
import moment from 'moment';

import { storageManager, STORAGE_TYPES } from 'utils/storageUtils.js';
const localeStorage = storageManager.createOrFetchStorage('locale', STORAGE_TYPES.local);

/**
* This method checks if the `Intl` API exists in the current context. If it does not, then it will load the Intl
* polyfill. This should happen in all versions of Safari and IE < 11.
*/
function loadIntlPolyfill(locale) {
  if (areIntlLocalesSupported(locale)) {
    return Promise.resolve(locale, false);
  }
  return new Promise(resolve => {
    require.ensure(['intl'], require => {
      require('intl');
      resolve(locale, true);
    }, 'intl-polyfill');
  });
}

/**
* Determines the current locale by checking if there's something in the store, then the `navigator` object.
* Called as part of the boot sequence for the app to determine the locale for `react-intl`. Defaults to 'en'.
* Acceptible return values are 'en' or 'fr'.
*/
function getCurrentLocale() {
  // @TODO: Maybe there's some way the server can put the locale from it's request as an attribute on an element?
  // Eg. `document.documentElement.attributes.lang.value`
  const locale = localeStorage.get() || navigator.language || navigator.browserLanguage || 'en';
  // The locale may include a country code at the end if the user did not have it in storage (eg. "en-US").
  // Our application is only setup to use the first two letters of the code: the actual language code.
  return locale.slice(0, 2);
}

/**
* This function will determine what is the appropriate locale data that needs to be loaded, then load it. It returns
* a Promise that, when resolved, will also save the passed in locale to storage.
*
* Webpack does not let you use `require.ensure` with a variable as the path. You have to use a hardcoded string,
* oterhwise you'll end up with "undefined is not a function" in the browser. This gnarly looking chunk below is a
* result of that knowledge. We have to repeat all the code to make this bundle split per language. Otherwise we
* could have done this to handle both languages... -> "const path = `blah/${locale}`; require.ensure([path]);"
* Additionally, if the browser does not support the Intl API, then we need to load the `intl` polyfill's
* locale data along with the `react-intl` locale data for both languages... hence this enormous switch statement.
*/
function loadLocaleData(locale) {
  const hasIntl = areIntlLocalesSupported(locale);
  return new Promise(resolve => {
    switch (locale) {

      case 'fr':
        if (!hasIntl) {
          // No `Intl` support. Load the polyfill data along with the `react-intl` data.
          require.ensure([
            'intl/locale-data/jsonp/fr',
            'react-intl/locale-data/fr'
          ], require => {
            require('intl/locale-data/jsonp/fr');
            addReactIntlLocaleData(require('react-intl/locale-data/fr'));
            resolve(locale);
          }, 'intl-locale-data-fr-with-polyfill');
        } else {
          // `Intl` support, so only need to load the react-intl data.
          require.ensure([
            'react-intl/locale-data/fr'
          ], require => {
            addReactIntlLocaleData(require('react-intl/locale-data/fr'));
            resolve(locale);
          }, 'intl-locale-data-fr');
        }
        break;

      case 'en':
      default:
        if (!hasIntl) {
          // No `Intl` support. Load the polyfill data along with the `react-intl` data.
          require.ensure([
            'intl/locale-data/jsonp/en',
            'react-intl/locale-data/en'
          ], require => {
            require('intl/locale-data/jsonp/en');
            addReactIntlLocaleData(require('react-intl/locale-data/en'));
            resolve(locale);
          }, 'intl-locale-data-en-with-polyfill');
        } else {
          // `Intl` support, so only need to load the react-intl data.
          require.ensure([
            'react-intl/locale-data/en'
          ], require => {
            addReactIntlLocaleData(require('react-intl/locale-data/en'));
            resolve(locale);
          }, 'intl-locale-data-en');
        }
        break;
    }
  }).then((resolvedLocale) => {
    localeStorage.set(resolvedLocale);
    return resolvedLocale;
  });
}

/**
* Returns the opposite locale for the one that was passed in.
*/
function getNextLocale(locale) {
  return locale === 'en' ? 'fr' : 'en';
}

/**
* This bootSequence is what gets called before the app is rendered. It will try to see if we need to load the `Intl`
* polyfill, load it if need be, load the extra necessary locale data for the lang to work, add the locale to storage
* (handled inside `loadLocaleData`), and finally resolve a Promise with the locale code.
*/
function bootSequence(locale = getCurrentLocale()) {
  return loadIntlPolyfill(locale)
    .then(loadLocaleData)
    .then(() => moment.locale(locale)) // Ensure moment is loaded with the correct locale
    .catch(err => console.error(err)); // eslint-disable-line no-console
}

export {
  bootSequence,
  getCurrentLocale,
  getNextLocale,
  loadLocaleData
};
