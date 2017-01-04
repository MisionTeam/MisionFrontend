import { createApiWrappers } from 'utils/apiUtils.js';

export default createApiWrappers({
  getFullProfile: ['GET', '/profile/full?token=:token'],
  postProfile: ['POST', '/profile?token=:token']
});
