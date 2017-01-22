import axios from 'axios';

// Add any config setup for axios.
// const authStorage = storageManager.createOrFetchStorage('auth', STORAGE_TYPES.local);
export const api = axios.create({
  baseURL: 'http://52.23.239.121:8181/'
});

api.interceptors.request.use(
  (config) => {
    const updateConfig = config;
    updateConfig.headers = {
      'content-type': 'application/x-www-form-urlencoded'
    };
    return updateConfig;
  }, (error) => Promise.reject(error)
);

export const setRequestErrorHandler = (callback) => {
  api.interceptors.response.use(
    response => response,
    (error) => {
      callback(error);
      return Promise.reject(error);
    }
  );
};

export class RequestBuilder {

  constructor(url, httpRequestType) {
    this.url = url;
    this.httpRequestType = httpRequestType;
    this.callbacks = [];
    this.errorCallback = () => {};
    this.payloader = response => response;
  }

  withPathComponents(pathComponents) {
    this.pathComponents = pathComponents;
    return this;
  }

  withData(data) {
    this.data = data;
    return this;
  }

  withTransform(payloader) {
    if (typeof payloader !== 'function') {
      throw new TypeError('withTransform must be called with a function');
    }
    this.payloader = payloader;
    return this;
  }

  addCallback(callback) {
    if (typeof callback === 'function') {
      this.callbacks.push(callback);
    }
    return this;
  }

  withErrorCallback(callback) {
    if (typeof callback === 'function') {
      this.errorCallback = callback;
    }
    return this;
  }

  transformResponseAndRunCallbacks(response) {
    const formatted = this.payloader(response);
    this.callbacks.forEach((callback) => callback(formatted));
    return formatted;
  }

  runErrorCallback(error) {
    this.errorCallback(error);
    throw error;
  }

  exec() {
    const requestType = this.httpRequestType.toLowerCase();
    if (requestType === 'get' || requestType === 'delete') {
      this.data = {
        params: this.data
      };
    }
    return api[requestType](this._buildUrl(), this.data)
      .then((response) => this.transformResponseAndRunCallbacks(response))
      .catch((error) => this.runErrorCallback(error));
  }

  _buildUrl() {
    let url = this.url;
    if (this.pathComponents) {
      Object.keys(this.pathComponents).forEach((key) => {
        url = url.replace(`:${key}`, encodeURIComponent(this.pathComponents[key]));
      });
    }
    return url;
  }
}

/*
* Creates wrapper functions for API calls,
* @param configs {object} of the form:
* {
*     getWrapperMethod: ['GET', '/api/method'],
*     postWrapperMethod: ['POST', '/api/method'],
*     ...etc,
* }
* @returns {object} with the same keys, where the values are functions that wrap
* the api calls
*/
export const createApiWrappers = (configs) => {
  const wrappers = {};
  Object.keys(configs).forEach((key) => {
    const config = configs[key];
    const httpMethod = config[0];
    const url = config[1];
    wrappers[key] = (...args) => new RequestBuilder(url, httpMethod, ...args);
  });
  return wrappers;
};
