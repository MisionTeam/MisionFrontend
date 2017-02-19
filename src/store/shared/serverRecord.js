import Immutable from 'immutable';

/**
 * This factory will return an Immutable Record factory function that will have the props you specify as well
 * as the loading props. Use this to make models that contain data from the server.
 */

const ServerRecord = (props) => {
  const Record = Immutable.Record({
    isLoading: false,
    loadedDate: null,
    ...props
  });

  Record.prototype.setLoading = function setLoading() {
    return this.merge({
      isLoading: true,
      loadedDate: null
    });
  };

  Record.prototype.unsetLoading = function unsetLoading() {
    return this.merge({
      isLoading: false,
      loadedDate: null
    });
  };

  Record.prototype.setLoaded = function setLoaded() {
    return this.merge({
      isLoading: false,
      loadedDate: new Date().getTime()
    });
  };

  return Record;
};

export default ServerRecord;
