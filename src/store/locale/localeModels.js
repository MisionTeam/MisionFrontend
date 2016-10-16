import Immutable from 'immutable';
import { getCurrentLocale } from 'utils/intlUtils.js';
import messages from 'messages/index.js';

const initialLocale = getCurrentLocale();

export const InitialState = Immutable.Record({
  messages: Immutable.Map(messages[initialLocale])
});
