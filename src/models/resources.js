import axios from 'axios';
import _ from 'lodash';

const logAllRequests = false;

function baseConfig() {
  return {
    baseURL: 'https://api.openbrewerydb.org/breweries/',
    timeout: 30000,
  };
}

const Resource = function Resource(options) {
  const baseInstance = axios.create(_.extend(baseConfig(), options));
  baseInstance.interceptors.request.use((config) => {
    if (logAllRequests) {
      console.log('request use normal');
      console.log(config);
    }
    return config;
  }, (error) => {
    if (logAllRequests) {
      console.log('request error');
      console.log(error);
    }

    return Promise.reject(error);
  });

  if (this instanceof Resource) {
    this.baseInstance = baseInstance;
    return this;
  }
  return baseInstance;
};

// Resource.prototype.makeRequest = async function makeRequest(config) {
//   try {
//     const { data: projects } = await this.baseInstance(config);
//     return projects;
//   } catch (e) {
//     // TODO: Add an alert here?
//     console.log(e);
//     throw e;
//   }
// };
// Resource.prototype.generateCancelToken = function generateCancelToken() {
//   const { CancelToken } = axios;
//   return CancelToken.source();
// };
// Resource.prototype.isCancel = function isCancel() {
//   return axios.isCancel;
// };

export default Resource;
