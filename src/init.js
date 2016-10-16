// This file houses the init sequence before trying to render the React application. Is in the entry point for the app
// and should be used to do anything we need to before rendering.
import { bootSequence as intlBootSequence } from './utils/intlUtils.js';
import render from './main.js';

// Get signoff (or Error) from the IntlUtils module by calling it's bootSequence, which is a Promise that will resolve
// with the determined locale.
function getSignoffFromIntlUtils() {
  return intlBootSequence();
}

// The result of this boot method is what is exported from this module.
function init() {
  // @TODO: Add any other init sequence stuff here eg. getting initial state from server...
  return getSignoffFromIntlUtils()
    .then(render)
    .catch(err => {
      console.error('Error in init sequence', err); // eslint-disable-line no-console
    });
}

// Make it so!
init();
