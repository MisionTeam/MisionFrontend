import { createApiWrappers } from 'utils/apiUtils.js';

export default createApiWrappers({
  getProfile: ['GET', '/auth/profile?token=:token'],
  patchProfile: ['PATCH', '/auth/profile?token=:token']
});
